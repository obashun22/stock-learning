import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export function Ch2Lesson3() {
  return (
    <LessonShell lessonId="ch2-l3">
      <Section title="😱 「安く買って高く売る」が本当に難しい理由">
        <p>
          「下がったら買って、上がったら売る」 — 言葉にすると単純。でも、実際にやろうとすると <strong>これがほぼ不可能</strong> なんです。
        </p>
        <ul>
          <li>「もっと下がるかも」と待ってしまい、上昇に乗り遅れる</li>
          <li>「もっと上がるかも」と欲張って、下落に巻き込まれる</li>
          <li>毎日チャートを見ると、心が消耗する</li>
        </ul>
        <p>
          プロでも <strong>市場の最高値・最安値を当てるのは至難</strong>。
          むしろ <strong>「タイミングを当てようとしないこと」</strong> が長期投資の最大のコツです。
        </p>
      </Section>

      <Section title="📉 「もっとも価値ある10日」を逃すと何が起こる？">
        <p>
          有名な分析があります：S&P500指数を <strong>長期保有し続けた場合</strong> と、
          <strong>たまたま上昇率の高い数日だけ市場を離れていた場合</strong> でリターンを比較する、というもの。
        </p>
        <MissingBestDaysChart />
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⚠️ つまり、「タイミングを計って動く」と <strong>大半の上昇日を逃すリスク</strong> がある。
          相場の急騰は予測不可能で、しばしば「最悪の日々」のすぐ後にやってきます。
        </p>
      </Section>

      <Section title="🥄 解決策：ドルコスト平均法（積立投資）">
        <p>
          <strong>毎月決まった金額</strong> を、相場の状況に関係なく機械的に投資する手法を
          <strong>ドルコスト平均法</strong> と呼びます（Dollar Cost Averaging, DCA）。
        </p>
        <div className="card p-4 bg-emerald-50/40 border-emerald-100">
          <div className="font-semibold mb-2">仕組み</div>
          <ul className="text-sm space-y-1.5">
            <li>・株価が <strong>高いとき</strong>：少ない株数しか買えない（買い控え）</li>
            <li>・株価が <strong>安いとき</strong>：多くの株数を買える（自動的に多めに買う）</li>
            <li>→ 結果として <strong>平均取得単価が抑えられる</strong></li>
          </ul>
        </div>
        <DcaIllustration />
      </Section>

      <Section title="🪤 ドルコスト平均法の弱点も知っておく">
        <p>
          無敵に見える DCA ですが、万能ではありません。
        </p>
        <ul>
          <li>📈 <strong>右肩上がりの相場では、一括投資のほうがリターンは高い</strong>（理論的にはこちら）</li>
          <li>💵 短期では本領を発揮しない — 真価が見えるのは10年以上</li>
          <li>🧠 「安く買うチャンス」を心理的に活かしにくい</li>
        </ul>
        <p>
          それでも、ほとんどの初心者にとっては DCA が現実的で続けやすい。<strong>「最強の戦略ではなく、続けられる戦略」</strong> こそが投資では大事です。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 株価の天底を当てるのはプロでも難しい</li>
            <li>✅ 上昇日を数日逃すだけで、長期リターンは大きく毀損する</li>
            <li>✅ ドルコスト平均法は「タイミングを諦める」代わりに、心理負荷を最小化する</li>
            <li>✅ 続けられる戦略がベスト。NISAのつみたて枠が王道</li>
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

// 「ベスト10日を逃した場合」のリターン比較 (illustrative)
function MissingBestDaysChart() {
  // 20年で示す例示データ
  const data = [
    { label: 'フル投資', value: 9.8 },
    { label: 'ベスト10日除外', value: 5.6 },
    { label: 'ベスト20日除外', value: 2.9 },
    { label: 'ベスト30日除外', value: 0.7 },
  ];
  return (
    <div className="card p-4">
      <div className="text-sm font-semibold mb-2">
        「市場を離れたタイミング」と年率リターン（Putnam Investments 2003-2018年の調査をもとにした例示）
      </div>
      <div className="space-y-2.5">
        {data.map((d) => (
          <div key={d.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-700">{d.label}</span>
              <span className="font-mono tabular-nums font-bold text-navy-900">{d.value}%</span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className={`h-full ${d.value > 5 ? 'bg-emerald-500' : d.value > 1 ? 'bg-amber-500' : 'bg-rose-500'}`}
                style={{ width: `${(d.value / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] text-slate-500 mt-3 leading-relaxed">
        ※ あくまで例示。実際の数値は期間によりますが、傾向は実証データと一致しています。
      </div>
    </div>
  );
}

// DCAで価格の上下に対して株数が変動するさまの可視化
function DcaIllustration() {
  // 月次データ。価格は1000を起点に変動
  const data = [
    { m: '1月', price: 1000, qty: 10 },
    { m: '2月', price: 800, qty: 12.5 },
    { m: '3月', price: 700, qty: 14.3 },
    { m: '4月', price: 900, qty: 11.1 },
    { m: '5月', price: 1100, qty: 9.1 },
    { m: '6月', price: 1000, qty: 10 },
  ];
  const totalQty = data.reduce((a, b) => a + b.qty, 0);
  const totalSpend = 10000 * data.length;
  const avg = totalSpend / totalQty;
  return (
    <div className="card p-4 mt-3">
      <div className="text-sm font-semibold mb-1">
        毎月1万円を投資した場合（株価変動シナリオ）
      </div>
      <div className="h-52">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="m" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} width={50} />
            <Tooltip />
            <Line type="monotone" dataKey="price" name="株価" stroke="#324d8a" strokeWidth={2.5} dot />
            <Line type="monotone" dataKey="qty" name="買えた株数" stroke="#f59e0b" strokeWidth={2.5} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-slate-600 mt-2 leading-relaxed">
        合計 <strong>{totalQty.toFixed(1)}株</strong> を <strong>¥{totalSpend.toLocaleString()}</strong> で取得 →
        平均取得単価は <strong>¥{avg.toFixed(0)}</strong>。
        単純平均 (¥{((1000 + 800 + 700 + 900 + 1100 + 1000) / 6).toFixed(0)}) より低くなる点に注目！
      </div>
    </div>
  );
}
