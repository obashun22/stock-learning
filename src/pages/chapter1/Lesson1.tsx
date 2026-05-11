import { LessonShell } from '../../components/LessonShell';

export function Ch1Lesson1() {
  return (
    <LessonShell lessonId="ch1-l1">
      <Section title="🎂 ケーキでイメージしよう">
        <p>
          会社という大きなケーキがあったとします。これを <strong>1万切れ</strong> に切り分けて、
          「1切れ買いたい人いますか？」と売り出した — その <strong>1切れ</strong> が <strong>株式（株）</strong> です。
        </p>
        <p>
          つまり株を買うということは、<strong>その会社の「ほんの一部のオーナー」になる</strong> ということ。
          全切れの 1% を持っていれば、その会社の 1% を所有していることになります。
        </p>
      </Section>

      <Section title="💼 株主が持つ3つの権利">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <RightCard
            emoji="💰"
            title="利益配分を受け取る権利"
            desc="会社が儲かったら、その一部を「配当金」として受け取れます。"
          />
          <RightCard
            emoji="🗳️"
            title="経営に参加する権利"
            desc="株主総会で議決権を行使できます。持ち株数が多いほど発言力アップ。"
          />
          <RightCard
            emoji="📜"
            title="残余財産分配請求権"
            desc="万が一会社が解散した場合、残った財産を持ち株数に応じて受け取る権利。"
          />
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 個人投資家のほとんどは1番目（配当）と、株価が上がった時の値上がり益が目的です。
        </p>
      </Section>

      <Section title="🔁 預金・債券・株式の違い">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead>
              <tr className="bg-navy-50 text-navy-900">
                <th className="text-left p-2.5 border border-navy-100">商品</th>
                <th className="text-left p-2.5 border border-navy-100">あなたの立場</th>
                <th className="text-left p-2.5 border border-navy-100">リターン</th>
                <th className="text-left p-2.5 border border-navy-100">リスク</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-2.5 border border-slate-200 font-semibold">預金</td>
                <td className="p-2.5 border border-slate-200">銀行に貸している人</td>
                <td className="p-2.5 border border-slate-200">利息（ごく低い）</td>
                <td className="p-2.5 border border-slate-200">ほぼなし（〜1,000万円保護）</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-2.5 border border-slate-200 font-semibold">債券</td>
                <td className="p-2.5 border border-slate-200">国や会社に貸している人</td>
                <td className="p-2.5 border border-slate-200">利息（中くらい）</td>
                <td className="p-2.5 border border-slate-200">発行体の倒産リスク</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-semibold text-accent-dark">株式</td>
                <td className="p-2.5 border border-slate-200">会社のオーナーの1人</td>
                <td className="p-2.5 border border-slate-200">配当 + 値上がり益（高い）</td>
                <td className="p-2.5 border border-slate-200">価格変動・倒産で価値ゼロも</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          ポイントは <strong>「貸している」のか「所有している」のか</strong>。
          預金や債券は「貸している」立場なので、約束された利息以上はもらえません。
          一方、株式は <strong>会社の所有者の1人</strong> なので、会社が大きく成長すれば株主も大きな利益を得られます。
          その代わり、会社が傾けば損失も自分が引き受けることになります。
        </p>
      </Section>

      <Section title="🏢 会社はなぜ株式を発行するの？">
        <p>
          会社が事業を拡大したいとき、お金が必要になります。集める方法は大きく2つ：
        </p>
        <ul>
          <li><strong>借金（融資・社債）</strong>：返済義務あり、利息を払う</li>
          <li><strong>株式発行</strong>：返済義務なし、その代わり所有権の一部を渡す</li>
        </ul>
        <p>
          株式発行は <strong>会社にとっては「返さなくていいお金」</strong> なので、長期的な事業投資にぴったり。
          投資家にとっては <strong>会社の成長に賭ける</strong> 仕組みです。
          このマッチングの場が <strong>株式市場</strong> です。
        </p>
      </Section>

      <Section title="📝 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 株式 = 会社の所有権を細かく分けたもの</li>
            <li>✅ 株主の3つの権利：配当・議決権・残余財産分配</li>
            <li>✅ 預金/債券は「貸す」、株式は「所有する」が決定的に違う</li>
            <li>✅ 会社が株を発行するのは「返さなくていい資金」を集めるため</li>
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

function RightCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-bold text-navy-900 text-sm">{title}</div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}
