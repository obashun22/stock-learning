import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export function Ch4Lesson4() {
  return (
    <LessonShell lessonId="ch4-l4">
      <Section title="📊 「出来高」とは？">
        <p>
          出来高（できだか、Volume）は <strong>その期間に売買が成立した株数</strong>。
          チャートの下部に棒グラフで表示されることが多い指標です。
        </p>
        <p>
          価格は <strong>「結果」</strong> ですが、出来高は <strong>「市場参加者の熱量」</strong> を示します。
          価格だけ見ても見えない情報がここにあります。
        </p>
      </Section>

      <VolumeChart />

      <Section title="🔥 出来高 × 株価の組み合わせで読む4パターン">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">株価</th>
                <th className="text-left p-2.5 border border-navy-100">出来高</th>
                <th className="text-left p-2.5 border border-navy-100">解釈</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">📈 上昇</td><td className="p-2.5 border border-slate-200">🔼 多い</td><td className="p-2.5 border border-slate-200 text-emerald-700">✅ 健全な上昇。トレンドが続きやすい</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">📈 上昇</td><td className="p-2.5 border border-slate-200">🔽 少ない</td><td className="p-2.5 border border-slate-200 text-amber-700">⚠️ 上昇のエネルギーが乏しい。続きにくい</td></tr>
              <tr><td className="p-2.5 border border-slate-200">📉 下落</td><td className="p-2.5 border border-slate-200">🔼 多い</td><td className="p-2.5 border border-slate-200 text-rose-700">⚠️ 売り圧力が強い。更に下落の懸念</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">📉 下落</td><td className="p-2.5 border border-slate-200">🔽 少ない</td><td className="p-2.5 border border-slate-200">😐 売りが枯れてきた。底入れの可能性</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="💥 注目すべき「出来高急増」シグナル">
        <p>
          普段の <strong>3倍以上</strong> の出来高が出た日は、何かが起こっています。例えば：
        </p>
        <ul>
          <li>📰 重要な決算発表・業績修正</li>
          <li>💰 M&A・自社株買い・株式分割の発表</li>
          <li>📊 大口投資家の参戦/撤退</li>
          <li>🌍 業界全体に影響するニュース</li>
        </ul>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 出来高の急増と <strong>大陽線・大陰線</strong> の組み合わせは、トレンド転換のサインとして特に重要視されます。
        </p>
      </Section>

      <Section title="💧 「流動性」も出来高で判断">
        <p>
          出来高が <strong>慢性的に少ない銘柄</strong> は要注意。流動性が低いと：
        </p>
        <ul>
          <li>🐢 <strong>売りたい時に売れない</strong>（買い手がいない）</li>
          <li>💸 <strong>成行注文で予想以上に不利な価格で約定する</strong></li>
          <li>📈 <strong>ちょっとの注文で株価が大きく動く</strong>（仕手化リスク）</li>
        </ul>
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⚠️ 個人投資家にとって、出来高が極端に少ない小型株は、思わぬリスクが潜むので扱いに注意。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 出来高 = 市場参加者の熱量。価格と組み合わせて読む</li>
            <li>✅ 出来高を伴う上昇は信頼性が高い、伴わない上昇は危うい</li>
            <li>✅ 普段の3倍以上の出来高は何かが起きているサイン</li>
            <li>✅ 出来高が少ない銘柄は流動性リスクに注意</li>
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

function VolumeChart() {
  const data = [
    { d: '月', price: 1000, vol: 8000 },
    { d: '火', price: 1015, vol: 9500 },
    { d: '水', price: 1040, vol: 15000 },
    { d: '木', price: 1080, vol: 24000 },
    { d: '金', price: 1070, vol: 12000 },
    { d: '月', price: 1050, vol: 10000 },
    { d: '火', price: 1020, vol: 18000 },
    { d: '水', price: 990, vol: 22000 },
    { d: '木', price: 1005, vol: 9000 },
    { d: '金', price: 1020, vol: 8500 },
  ];
  return (
    <div className="card p-4">
      <div className="text-sm font-semibold mb-1">株価（折れ線）と出来高（棒）</div>
      <div className="h-64">
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="d" tick={{ fontSize: 11 }} />
            <YAxis yAxisId="left" tick={{ fontSize: 11 }} width={50} />
            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} width={50} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar yAxisId="right" dataKey="vol" name="出来高" fill="#94a3b8" />
            <Line yAxisId="left" type="monotone" dataKey="price" name="株価" stroke="#324d8a" strokeWidth={2.5} dot />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-slate-500 mt-1">
        水曜・木曜の上昇局面で出来高が伸びている＝健全な上昇。一方、翌週水曜の下落も出来高を伴い、売り圧力の強さが見える。
      </div>
    </div>
  );
}
