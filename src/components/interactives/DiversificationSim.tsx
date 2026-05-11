import { useMemo, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

// 1銘柄 vs 複数銘柄に分散した場合の値動きを比較するシミュレーター。
// 「分散するとリスク（=値動きのブレ幅）が下がる」を直感的に体感できる。

type Series = { day: number; single: number; diversified: number };

function generatePath(seed: number, days: number, vol: number): number[] {
  // 簡易乱数（決定論的）
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const path: number[] = [100];
  for (let i = 1; i < days; i++) {
    const ret = (rand() - 0.5) * 2 * vol; // -vol .. vol
    path.push(path[i - 1] * (1 + ret));
  }
  return path;
}

export function DiversificationSim() {
  const [count, setCount] = useState(10); // 分散先銘柄数
  const [days] = useState(120);
  const [seed, setSeed] = useState(1);

  const { data, singleStd, divStd } = useMemo(() => {
    const singlePath = generatePath(seed, days, 0.04);
    // 複数銘柄の独立パスを平均化（簡略化のため独立を仮定）
    const paths: number[][] = [];
    for (let i = 0; i < count; i++) {
      paths.push(generatePath(seed + i * 31, days, 0.04));
    }
    const divPath: number[] = [];
    for (let d = 0; d < days; d++) {
      const avg = paths.reduce((a, p) => a + p[d], 0) / paths.length;
      divPath.push(avg);
    }
    const data: Series[] = singlePath.map((v, i) => ({
      day: i,
      single: Math.round(v * 100) / 100,
      diversified: Math.round(divPath[i] * 100) / 100,
    }));

    // 日次リターンの標準偏差を計算
    const stdOf = (path: number[]) => {
      const rets: number[] = [];
      for (let i = 1; i < path.length; i++) rets.push((path[i] - path[i - 1]) / path[i - 1]);
      const mean = rets.reduce((a, b) => a + b, 0) / rets.length;
      const v = rets.reduce((a, b) => a + (b - mean) ** 2, 0) / rets.length;
      return Math.sqrt(v) * 100;
    };
    return { data, singleStd: stdOf(singlePath), divStd: stdOf(divPath) };
  }, [count, seed, days]);

  return (
    <div className="card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="chip-accent">🧪 分散投資シミュレーター</span>
        <h3 className="text-base sm:text-lg">「ブレ幅」がどれだけ減るか</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-600">分散先銘柄数</span>
            <span className="font-mono font-bold text-navy-900">{count} 銘柄</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>
        <div className="flex items-end">
          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            className="btn-ghost w-full"
          >
            🎲 別のシナリオで試す
          </button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" tickFormatter={(v) => `${v}日`} tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} width={40} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="single" name="1銘柄だけに集中投資" stroke="#ef4444" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="diversified" name={`${count}銘柄に分散投資`} stroke="#10b981" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="card p-3 bg-rose-50/40 border-rose-100">
          <div className="text-xs text-rose-700">集中投資のブレ幅</div>
          <div className="text-xl font-bold text-rose-800 font-mono">{singleStd.toFixed(2)}%</div>
          <div className="text-[10px] text-slate-500">日次リターン標準偏差</div>
        </div>
        <div className="card p-3 bg-emerald-50/40 border-emerald-100">
          <div className="text-xs text-emerald-700">分散投資のブレ幅</div>
          <div className="text-xl font-bold text-emerald-800 font-mono">{divStd.toFixed(2)}%</div>
          <div className="text-[10px] text-slate-500">{((1 - divStd / singleStd) * 100).toFixed(0)}% 縮小</div>
        </div>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        ※ 簡略化のため銘柄間の値動きを独立と仮定しています（実際は相関があり、減少幅はもう少し緩やか）。
        ただし「銘柄数を増やすほどブレが減る」傾向は実際の市場でも確認されています。
      </p>
    </div>
  );
}
