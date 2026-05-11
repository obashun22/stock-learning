import { useMemo, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

// 元本・毎月積立額・年利・年数を動かして「複利の威力」を体験する。
// NISA レッスンで主に使用。

export function CompoundSimulator() {
  const [principal, setPrincipal] = useState(0);
  const [monthly, setMonthly] = useState(30000);
  const [rate, setRate] = useState(5); // 年利%
  const [years, setYears] = useState(20);

  const data = useMemo(() => {
    const r = rate / 100;
    const out: { year: number; principalSum: number; total: number; simpleTotal: number }[] = [];
    let total = principal;
    let principalSum = principal;
    let simple = principal;
    for (let y = 0; y <= years; y++) {
      out.push({
        year: y,
        principalSum: Math.round(principalSum),
        total: Math.round(total),
        simpleTotal: Math.round(simple),
      });
      // 1年経過 — 月複利想定
      for (let m = 0; m < 12; m++) {
        total = total * (1 + r / 12) + monthly;
      }
      simple = simple + monthly * 12 + (principal + monthly * 12 * (y + 1)) * 0; // 比較用に「単利想定（元本のみ）」
      // 「投資しなかった場合」の単純合計
      simple = principalSum + monthly * 12 * (y + 1);
      principalSum += monthly * 12;
    }
    return out;
  }, [principal, monthly, rate, years]);

  const last = data[data.length - 1];
  const profit = last.total - last.simpleTotal;
  const yen = (n: number) => `¥${Math.round(n).toLocaleString()}`;
  const man = (n: number) => `${Math.round(n / 10000).toLocaleString()}万円`;

  return (
    <div className="card p-4 sm:p-6 space-y-4">
      <div className="flex items-center gap-2">
        <span className="chip-accent">🧪 シミュレーター</span>
        <h3 className="text-base sm:text-lg">複利の威力を体験</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Slider label="初期投資額" value={principal} setValue={setPrincipal} min={0} max={5_000_000} step={10_000} format={man} />
        <Slider label="毎月積立額" value={monthly} setValue={setMonthly} min={0} max={100_000} step={1_000} format={yen} />
        <Slider label="年利（想定）" value={rate} setValue={setRate} min={0} max={15} step={0.5} format={(v) => `${v}%`} />
        <Slider label="運用年数" value={years} setValue={setYears} min={1} max={40} step={1} format={(v) => `${v}年`} />
      </div>

      <div className="h-64 sm:h-72">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="year"
              tickFormatter={(v) => `${v}年`}
              tick={{ fontSize: 11 }}
            />
            <YAxis
              tickFormatter={(v) => `${Math.round(v / 10000)}万`}
              tick={{ fontSize: 11 }}
              width={50}
            />
            <Tooltip
              formatter={(v) => yen(Number(v))}
              labelFormatter={(l) => `${l}年後`}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line
              type="monotone"
              dataKey="simpleTotal"
              name="投資しなかった場合（積立額の合計）"
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="total"
              name="複利で運用した場合"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <Stat label={`${years}年後の総額`} value={yen(last.total)} highlight />
        <Stat label="積み立てた元本" value={yen(last.simpleTotal)} />
        <Stat label="運用で増えた分" value={yen(profit)} accent />
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">
        ※ 年利が一定で複利運用される前提の単純化計算。実際の市場は変動するので、これはあくまで「複利の効果のイメージ」です。
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  setValue,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex justify-between text-[11px] text-slate-600 mb-1">
        <span>{label}</span>
        <span className="font-mono tabular-nums text-navy-900 font-semibold">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-accent"
      />
    </div>
  );
}

function Stat({ label, value, highlight, accent }: { label: string; value: string; highlight?: boolean; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl p-3 border ${
        highlight
          ? 'bg-navy-50 border-navy-100'
          : accent
            ? 'bg-amber-50 border-amber-100'
            : 'bg-slate-50 border-slate-100'
      }`}
    >
      <div className="text-[11px] text-slate-600">{label}</div>
      <div className={`text-lg font-bold mt-0.5 ${accent ? 'text-amber-700' : 'text-navy-900'}`}>{value}</div>
    </div>
  );
}
