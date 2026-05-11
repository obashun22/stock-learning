import { useState } from 'react';
import clsx from 'clsx';

// 株価・EPS・BPS・配当・純利益などを入力して PER / PBR / ROE / 配当利回りを計算する電卓。
// 入力値が変わると同期して指標と「割安/割高」の目安が出る。

const PRESETS = [
  {
    name: 'トヨタ自動車（例）',
    price: 2900,
    eps: 320,
    bps: 2700,
    dividend: 75,
    netIncome: 4_900_000, // 単位百万円
    equity: 35_000_000,
  },
  {
    name: '任天堂（例）',
    price: 9000,
    eps: 420,
    bps: 4100,
    dividend: 200,
    netIncome: 540_000,
    equity: 2_400_000,
  },
  {
    name: 'Apple（USD 例）',
    price: 210,
    eps: 6.5,
    bps: 4.0,
    dividend: 1.0,
    netIncome: 100_000,
    equity: 70_000,
  },
];

export function ValuationCalculator() {
  const [price, setPrice] = useState(2900);
  const [eps, setEps] = useState(320);
  const [bps, setBps] = useState(2700);
  const [dividend, setDividend] = useState(75);
  const [netIncome, setNetIncome] = useState(4_900_000);
  const [equity, setEquity] = useState(35_000_000);

  const per = eps > 0 ? price / eps : 0;
  const pbr = bps > 0 ? price / bps : 0;
  const yld = price > 0 ? (dividend / price) * 100 : 0;
  const roe = equity > 0 ? (netIncome / equity) * 100 : 0;

  const applyPreset = (i: number) => {
    const p = PRESETS[i];
    setPrice(p.price);
    setEps(p.eps);
    setBps(p.bps);
    setDividend(p.dividend);
    setNetIncome(p.netIncome);
    setEquity(p.equity);
  };

  return (
    <div className="card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="chip-accent">🧪 指標電卓</span>
        <h3 className="text-base sm:text-lg">PER / PBR / ROE / 配当利回り</h3>
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="text-slate-600 self-center">プリセット：</span>
        {PRESETS.map((p, i) => (
          <button
            key={p.name}
            type="button"
            onClick={() => applyPreset(i)}
            className="px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition"
          >
            {p.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Input label="株価" value={price} setValue={setPrice} unit="" />
        <Input label="EPS (1株利益)" value={eps} setValue={setEps} unit="" />
        <Input label="BPS (1株純資産)" value={bps} setValue={setBps} unit="" />
        <Input label="1株配当" value={dividend} setValue={setDividend} unit="" />
        <Input label="純利益 (百万)" value={netIncome} setValue={setNetIncome} unit="" />
        <Input label="自己資本 (百万)" value={equity} setValue={setEquity} unit="" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Metric
          name="PER"
          formula="株価 ÷ EPS"
          value={`${per.toFixed(2)} 倍`}
          rating={evalPer(per)}
          desc="低いほど割安。日本株は15倍前後、米テックは30倍超が普通"
        />
        <Metric
          name="PBR"
          formula="株価 ÷ BPS"
          value={`${pbr.toFixed(2)} 倍`}
          rating={evalPbr(pbr)}
          desc="1倍が解散価値。1倍割れは「割安」だが理由がある場合も"
        />
        <Metric
          name="ROE"
          formula="純利益 ÷ 自己資本"
          value={`${roe.toFixed(2)} %`}
          rating={evalRoe(roe)}
          desc="自己資本に対する収益力。日本は8%、米国は15%が目安"
        />
        <Metric
          name="配当利回り"
          formula="配当 ÷ 株価"
          value={`${yld.toFixed(2)} %`}
          rating={evalYield(yld)}
          desc="銀行預金との比較に。3%超で高配当銘柄と呼ばれることが多い"
        />
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        ※ 数値はあくまで簡易計算の参考値です。実際には業種・成長性・財務健全性などを踏まえて判断します。
      </p>
    </div>
  );
}

function Input({
  label,
  value,
  setValue,
  unit,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  unit: string;
}) {
  return (
    <div>
      <label className="text-xs text-slate-600">{label}</label>
      <div className="relative mt-1">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-navy-400 font-mono text-sm"
        />
        {unit && (
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400">{unit}</span>
        )}
      </div>
    </div>
  );
}

type Rating = 'low' | 'mid' | 'high' | 'caution';

function Metric({
  name,
  formula,
  value,
  rating,
  desc,
}: {
  name: string;
  formula: string;
  value: string;
  rating: Rating;
  desc: string;
}) {
  const ratingColor: Record<Rating, string> = {
    low: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    mid: 'bg-slate-50 text-slate-700 border-slate-200',
    high: 'bg-amber-50 text-amber-800 border-amber-200',
    caution: 'bg-rose-50 text-rose-700 border-rose-200',
  };
  const ratingLabel: Record<Rating, string> = {
    low: '🟢 割安寄り',
    mid: '🟡 標準',
    high: '🟠 やや高め',
    caution: '🔴 注意',
  };
  return (
    <div className={clsx('rounded-xl border p-3', ratingColor[rating])}>
      <div className="flex items-center justify-between">
        <span className="font-bold">{name}</span>
        <span className="text-[10px]">{ratingLabel[rating]}</span>
      </div>
      <div className="text-[10px] text-slate-500 font-mono mt-0.5">{formula}</div>
      <div className="text-2xl font-bold text-navy-900 mt-1 font-mono tabular-nums">{value}</div>
      <div className="text-[10px] mt-1 leading-snug opacity-80">{desc}</div>
    </div>
  );
}

function evalPer(v: number): Rating {
  if (v <= 0) return 'caution';
  if (v < 10) return 'low';
  if (v < 20) return 'mid';
  if (v < 40) return 'high';
  return 'caution';
}
function evalPbr(v: number): Rating {
  if (v <= 0) return 'caution';
  if (v < 1) return 'low';
  if (v < 2) return 'mid';
  if (v < 4) return 'high';
  return 'caution';
}
function evalRoe(v: number): Rating {
  if (v < 5) return 'caution';
  if (v < 10) return 'mid';
  if (v < 20) return 'high';
  return 'high';
}
function evalYield(v: number): Rating {
  if (v < 1) return 'mid';
  if (v < 3) return 'high';
  if (v < 6) return 'high';
  return 'caution'; // 高すぎは減配リスク
}
