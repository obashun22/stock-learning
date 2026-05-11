import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ReferenceArea } from 'recharts';
import { useMemo } from 'react';

export function Ch4Lesson2() {
  return (
    <LessonShell lessonId="ch4-l2">
      <Section title="📏 移動平均線とは？">
        <p>
          移動平均線（Moving Average, MA）は <strong>「過去N日分の終値の平均値」</strong> を線で結んだもの。
          毎日の細かい上下動を「ならす」ことで、<strong>トレンドの方向</strong> を見やすくします。
        </p>
        <p>
          例えば <strong>25日移動平均</strong> なら、毎日の点が「直近25日の終値の平均」になっています。
          ローソク足はギザギザしていますが、移動平均は滑らか — これが特徴です。
        </p>
      </Section>

      <Section title="📌 よく使われる3つの期間">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <MaCard color="emerald" name="短期（5〜25日）" desc="直近の勢い・短期的なトレンド" usage="押し目買いのタイミング判定" />
          <MaCard color="amber" name="中期（25〜75日）" desc="数ヶ月単位の方向性" usage="トレンドフォロー" />
          <MaCard color="rose" name="長期（200日）" desc="大きな相場の流れ" usage="強気/弱気相場の判定" />
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 <strong>200日移動平均</strong> は「長期投資家が見る最重要ライン」。
          株価がこれを上回っていれば強気相場、下回ると弱気相場、というシンプルな判断軸として有名です。
        </p>
      </Section>

      <Section title="🌅 ゴールデンクロス・デッドクロス">
        <p>
          2本の移動平均線（例：短期25日 と 長期75日）の <strong>交差</strong> が、有名な売買シグナルです。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card p-4 bg-emerald-50/40 border-emerald-100">
            <div className="font-bold text-emerald-800 mb-1">🌅 ゴールデンクロス</div>
            <p className="text-sm text-emerald-900/90 leading-relaxed">
              短期線が長期線を <strong>下から上に</strong>突き抜ける。
              「短期の勢いが長期の流れに勝った」=上昇トレンド開始のサイン。
            </p>
          </div>
          <div className="card p-4 bg-rose-50/40 border-rose-100">
            <div className="font-bold text-rose-800 mb-1">💀 デッドクロス</div>
            <p className="text-sm text-rose-900/90 leading-relaxed">
              短期線が長期線を <strong>上から下に</strong>突き抜ける。
              「短期の弱さが長期に伝染」=下降トレンド開始のサイン。
            </p>
          </div>
        </div>
        <MaCrossChart />
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⚠️ <strong>万能ではない</strong>。横ばい相場では「だまし」が頻発します。
          他のテクニカル指標やファンダメンタルズと組み合わせて判断するのが基本。
        </p>
      </Section>

      <Section title="🎯 移動平均をどう使う？3つの実用パターン">
        <ol className="space-y-3">
          <li>
            <strong>1. トレンド判定</strong>：株価が移動平均より上 → 上昇トレンド／下 → 下降トレンド
          </li>
          <li>
            <strong>2. サポート/レジスタンスとして機能</strong>：上昇トレンド中、株価が移動平均まで下げてきて反発することが多い（「押し目買い」のチャンス）
          </li>
          <li>
            <strong>3. 乖離（かいり）でとり過ぎを判定</strong>：株価が移動平均から大きく離れすぎると、戻る力が働きやすい
          </li>
        </ol>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 移動平均線は「過去N日の終値の平均」をなめらかに描いた線</li>
            <li>✅ 短期/中期/長期の3本を使い分ける</li>
            <li>✅ ゴールデンクロスは買いサイン、デッドクロスは売りサイン（万能ではない）</li>
            <li>✅ サポート/レジスタンスとしても機能する</li>
          </ul>
        </div>
      </Section>
    </LessonShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="prose-jp">
      <h2 className="text-xl sm:text-2xl mb-2 mt-4">{title}</h2>
      {children}
    </section>
  );
}

function MaCard({ color, name, desc, usage }: { color: 'emerald' | 'amber' | 'rose'; name: string; desc: string; usage: string }) {
  const bg = {
    emerald: 'bg-emerald-50/40 border-emerald-100',
    amber: 'bg-amber-50/40 border-amber-100',
    rose: 'bg-rose-50/40 border-rose-100',
  }[color];
  return (
    <div className={`card p-4 ${bg}`}>
      <div className="font-bold text-navy-900">{name}</div>
      <p className="text-xs text-slate-700 mt-1 leading-relaxed">{desc}</p>
      <div className="text-[10px] text-slate-500 mt-2">用途: {usage}</div>
    </div>
  );
}

// ゴールデンクロス・デッドクロス可視化用のサンプル時系列
function MaCrossChart() {
  const data = useMemo(() => {
    // 仮想的な株価
    const prices: number[] = [];
    let p = 1000;
    for (let i = 0; i < 120; i++) {
      // ゆるやかな上下、後半上昇
      const trend = i < 60 ? -2 : 3;
      p += trend + (Math.sin(i / 5) * 8);
      prices.push(Math.round(p));
    }
    return prices.map((price, i) => {
      const short = prices.slice(Math.max(0, i - 9), i + 1).reduce((a, b) => a + b, 0) / Math.min(10, i + 1);
      const long = prices.slice(Math.max(0, i - 29), i + 1).reduce((a, b) => a + b, 0) / Math.min(30, i + 1);
      return { day: i + 1, price, short: Math.round(short), long: Math.round(long) };
    });
  }, []);

  // クロス検出
  let gcDay = 0;
  let dcDay = 0;
  for (let i = 1; i < data.length; i++) {
    const prev = data[i - 1];
    const cur = data[i];
    if (prev.short < prev.long && cur.short >= cur.long && !gcDay) gcDay = cur.day;
    if (prev.short > prev.long && cur.short <= cur.long && !dcDay && gcDay) dcDay = cur.day;
  }

  return (
    <div className="card p-4">
      <div className="text-sm font-semibold mb-1">10日線（短期）と30日線（長期）の交差</div>
      <div className="h-64">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" tickFormatter={(v) => `${v}日`} tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} width={40} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            {dcDay > 0 && (
              <ReferenceArea x1={dcDay - 1} x2={dcDay + 1} fill="#ef4444" fillOpacity={0.2} />
            )}
            {gcDay > 0 && (
              <ReferenceArea x1={gcDay - 1} x2={gcDay + 1} fill="#10b981" fillOpacity={0.2} />
            )}
            <Line type="monotone" dataKey="price" name="株価" stroke="#94a3b8" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="short" name="短期(10日)" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="long" name="長期(30日)" stroke="#324d8a" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-slate-600 mt-1">
        🟢 緑のエリア＝ゴールデンクロス、🔴 赤のエリア＝デッドクロス
      </div>
    </div>
  );
}
