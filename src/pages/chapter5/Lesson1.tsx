import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export function Ch5Lesson1() {
  return (
    <LessonShell lessonId="ch5-l1">
      <Section title="🎢 「リスク」=「危険」ではない">
        <p>
          投資の世界での <strong>リスク</strong> は、日常会話の「危険」とは違う意味で使われます。
        </p>
        <div className="card p-5 bg-amber-50/40 border-amber-100">
          <div className="text-base sm:text-lg font-bold text-amber-900 leading-relaxed">
            投資のリスク = 「リターンのブレ幅」のこと
          </div>
          <p className="text-sm text-amber-900/80 mt-2 leading-relaxed">
            つまり、上にも下にも大きく動く可能性が「リスクが大きい」状態。
            一方向に確実に動くものは（たとえそれが上昇でも）「リスクは小さい」。
          </p>
        </div>
        <p>
          この尺度として、統計学の <strong>標準偏差</strong> がよく使われます。
          値動きが平均からどれだけ離れがちか、を数値化したものです。
        </p>
      </Section>

      <Section title="📏 標準偏差で「ブレ幅」を測る">
        <p>
          例えば、ある株のリターンが年率5%、標準偏差が15%だったとします。
          これは「68%の確率で、年間リターンは <strong>-10%〜+20%の間に収まる</strong>」 という意味です。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[420px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">商品</th>
                <th className="text-left p-2.5 border border-navy-100">年率リターン目安</th>
                <th className="text-left p-2.5 border border-navy-100">標準偏差（リスク）</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">普通預金</td><td className="p-2.5 border border-slate-200">0.001%</td><td className="p-2.5 border border-slate-200">ほぼ 0%</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">国債（10年）</td><td className="p-2.5 border border-slate-200">1〜3%</td><td className="p-2.5 border border-slate-200">3〜5%</td></tr>
              <tr><td className="p-2.5 border border-slate-200">先進国株（全世界）</td><td className="p-2.5 border border-slate-200">5〜7%</td><td className="p-2.5 border border-slate-200">15〜20%</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">新興国株</td><td className="p-2.5 border border-slate-200">5〜10%</td><td className="p-2.5 border border-slate-200">20〜30%</td></tr>
              <tr><td className="p-2.5 border border-slate-200">個別株</td><td className="p-2.5 border border-slate-200">様々</td><td className="p-2.5 border border-slate-200">25〜40%以上</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="⚖️ リスクとリターンは比例する">
        <p>
          経済学の根本的な原則：<strong>「ノーリスクで高リターン」は存在しない</strong>。
          高いリターンを得るには、高いリスクを引き受ける必要があります。
        </p>
        <RiskReturnChart />
        <p className="text-sm bg-rose-50 border border-rose-200 p-3 rounded-lg text-rose-900">
          ⚠️ 逆に言えば「リスクなしで年率10%」「絶対に元本保証で高利回り」と謳う商品は <strong>確実に詐欺</strong>。
          原則的に成立しません。
        </p>
      </Section>

      <Section title="🎯 自分が許容できるリスクを知る">
        <p>
          リスクをどこまで取るかは、年齢・収入・性格などで人それぞれ。
          自分のリスク許容度を理解せずに投資を始めると、暴落時に <strong>パニック売り</strong> してしまいます。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="font-semibold mb-2">📝 リスク許容度チェックの質問</div>
          <ul className="text-sm space-y-1.5">
            <li>📅 投資期間はどれくらい？（長いほどリスクを取れる）</li>
            <li>💼 安定収入はあるか？（あるほどリスクを取れる）</li>
            <li>🛡️ 生活防衛資金（生活費6ヶ月分）は別途あるか？</li>
            <li>😱 もし投資額が半分になったら、夜眠れるか？</li>
            <li>👶 家族構成と将来の出費（教育・住宅）は？</li>
          </ul>
        </div>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 投資のリスク = 危険ではなく「リターンのブレ幅」</li>
            <li>✅ 標準偏差がリスクの主要な尺度</li>
            <li>✅ リスクとリターンは原則として比例する（ローリスク・ハイリターンはない）</li>
            <li>✅ 自分のリスク許容度を知ってから投資戦略を決める</li>
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

function RiskReturnChart() {
  // 散布図のかわりに、各商品のリスクとリターンを棒で示す
  const items = [
    { name: '預金', risk: 0, ret: 0.001, color: '#94a3b8' },
    { name: '国債', risk: 4, ret: 2, color: '#60a5fa' },
    { name: '社債', risk: 7, ret: 3.5, color: '#3b82f6' },
    { name: 'バランス型', risk: 9, ret: 4.5, color: '#8b5cf6' },
    { name: '先進国株', risk: 18, ret: 6, color: '#f59e0b' },
    { name: '新興国株', risk: 25, ret: 7, color: '#ef4444' },
    { name: '個別株', risk: 35, ret: 8, color: '#dc2626' },
  ];
  const data = items.map((i) => ({ risk: i.risk, ret: i.ret, name: i.name }));
  return (
    <div className="card p-4">
      <div className="text-sm font-semibold mb-1">リスク（横軸）とリターン（縦軸）の関係</div>
      <div className="h-64">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="risk" type="number" name="リスク" unit="%" tick={{ fontSize: 10 }} />
            <YAxis dataKey="ret" type="number" name="リターン" unit="%" tick={{ fontSize: 10 }} width={40} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="ret" stroke="#324d8a" strokeWidth={2.5} dot={{ r: 5, fill: '#f59e0b' }} name="期待リターン" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-slate-500 mt-1">
        右に行くほど（リスクが上がるほど）、上に行く（リターンも上がる）傾向が見える
      </div>
    </div>
  );
}
