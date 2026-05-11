import { useState } from 'react';

// 1本のローソク足の OHLC を動かして、形と意味を学ぶインタラクティブ。

type Pattern = {
  name: string;
  open: number;
  high: number;
  low: number;
  close: number;
  meaning: string;
};

const PATTERNS: Pattern[] = [
  { name: '大陽線', open: 100, high: 122, low: 99, close: 120, meaning: '強い買い圧力。トレンド転換や継続のサイン' },
  { name: '大陰線', open: 120, high: 121, low: 98, close: 100, meaning: '強い売り圧力。投げ売りの可能性も' },
  { name: '小陽線', open: 110, high: 113, low: 108, close: 112, meaning: '小幅な上昇。様子見ムード' },
  { name: '十字線（同事）', open: 110, high: 115, low: 105, close: 110, meaning: '買いと売りが拮抗。転換点のサイン' },
  { name: '下影陽線（カラカサ）', open: 102, high: 105, low: 90, close: 104, meaning: '下げを切り返した強気。底打ち候補' },
  { name: '上影陰線', open: 110, high: 125, low: 108, close: 112, meaning: '上昇を売り叩かれた弱気。天井候補' },
];

export function CandlePlayground() {
  const [pattern, setPattern] = useState<Pattern>(PATTERNS[0]);
  const [open, setOpen] = useState(pattern.open);
  const [high, setHigh] = useState(pattern.high);
  const [low, setLow] = useState(pattern.low);
  const [close, setClose] = useState(pattern.close);

  const applyPattern = (p: Pattern) => {
    setPattern(p);
    setOpen(p.open);
    setHigh(p.high);
    setLow(p.low);
    setClose(p.close);
  };

  const updateOHLC = (
    newOpen: number,
    newHigh: number,
    newLow: number,
    newClose: number,
  ) => {
    setOpen(newOpen);
    setHigh(Math.max(newOpen, newClose, newHigh));
    setLow(Math.min(newOpen, newClose, newLow));
    setClose(newClose);
  };

  const isBull = close >= open;

  return (
    <div className="card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="chip-accent">🧪 ローソク足プレイグラウンド</span>
        <h3 className="text-base sm:text-lg">形と意味を体感</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {PATTERNS.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => applyPattern(p)}
            className={`px-3 py-1 rounded-full text-xs transition ${
              pattern.name === p.name
                ? 'bg-accent text-white shadow-soft'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* ローソク足ビジュアル */}
        <div className="flex items-center justify-center h-64 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-100 p-4">
          <CandleSvg open={open} high={high} low={low} close={close} />
        </div>

        {/* OHLC コントロール */}
        <div className="space-y-2.5">
          <OHLCInput label="高値 (High)" value={high} setValue={(v) => setHigh(Math.max(v, Math.max(open, close)))} color="text-slate-700" />
          <OHLCInput label="始値 (Open)" value={open} setValue={(v) => updateOHLC(v, high, low, close)} color="text-rose-700" />
          <OHLCInput label="終値 (Close)" value={close} setValue={(v) => updateOHLC(open, high, low, v)} color="text-emerald-700" />
          <OHLCInput label="安値 (Low)" value={low} setValue={(v) => setLow(Math.min(v, Math.min(open, close)))} color="text-slate-700" />

          <div className={`p-3 rounded-xl border ${isBull ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
            <div className="text-xs font-semibold mb-0.5">
              {isBull ? '🟢 陽線（始値 < 終値）' : '🔴 陰線（始値 > 終値）'}
            </div>
            <div className="text-xs">{pattern.meaning}</div>
          </div>
        </div>
      </div>

      <details className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
        <summary className="cursor-pointer font-semibold">💡 ローソク足の読み方おさらい</summary>
        <ul className="mt-2 space-y-1">
          <li>・本体（実体）：始値〜終値の範囲。陽線=緑/赤白、陰線=赤/黒</li>
          <li>・上ヒゲ：実体の上から高値まで。「一度は上がったが押し戻された」を示す</li>
          <li>・下ヒゲ：実体の下から安値まで。「一度は下がったが買い戻された」を示す</li>
          <li>・実体が長いほど、その方向の勢いが強い</li>
          <li>・ヒゲが長いほど、その方向への試みが拒絶されたことを示す</li>
        </ul>
      </details>
    </div>
  );
}

function OHLCInput({
  label,
  value,
  setValue,
  color,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-24 text-xs font-semibold ${color}`}>{label}</span>
      <input
        type="range"
        min={80}
        max={130}
        step={1}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="flex-1 accent-accent"
      />
      <span className="w-12 text-right font-mono text-sm tabular-nums">{value}</span>
    </div>
  );
}

function CandleSvg({
  open,
  high,
  low,
  close,
}: {
  open: number;
  high: number;
  low: number;
  close: number;
}) {
  // 80〜130 を SVG の y: 200(low) 〜 20(top) にマッピング
  const minY = 80;
  const maxY = 130;
  const toY = (v: number) => 200 - ((v - minY) / (maxY - minY)) * 180;

  const yHigh = toY(high);
  const yLow = toY(low);
  const yOpen = toY(open);
  const yClose = toY(close);

  const isBull = close >= open;
  const bodyTop = Math.min(yOpen, yClose);
  const bodyHeight = Math.max(2, Math.abs(yOpen - yClose));

  return (
    <svg viewBox="0 0 80 220" className="h-full">
      {/* 目盛 */}
      {[80, 90, 100, 110, 120, 130].map((v) => (
        <g key={v}>
          <line x1="0" x2="80" y1={toY(v)} y2={toY(v)} stroke="#e2e8f0" strokeDasharray="2 2" />
          <text x="2" y={toY(v) - 2} fontSize="8" fill="#94a3b8">
            {v}
          </text>
        </g>
      ))}
      {/* ヒゲ */}
      <line x1="40" x2="40" y1={yHigh} y2={yLow} stroke="#0f172a" strokeWidth="1.5" />
      {/* 実体 */}
      <rect
        x="28"
        y={bodyTop}
        width="24"
        height={bodyHeight}
        fill={isBull ? '#10b981' : '#ef4444'}
        stroke="#0f172a"
        strokeWidth="1"
        rx="1"
      />
      {/* ラベル */}
      <text x="58" y={yHigh + 3} fontSize="8" fill="#64748b">高 {high}</text>
      <text x="58" y={yLow + 3} fontSize="8" fill="#64748b">安 {low}</text>
      <text x="58" y={yOpen + 3} fontSize="8" fill={isBull ? '#10b981' : '#ef4444'}>始 {open}</text>
      <text x="58" y={yClose + 3} fontSize="8" fill={isBull ? '#10b981' : '#ef4444'}>終 {close}</text>
    </svg>
  );
}
