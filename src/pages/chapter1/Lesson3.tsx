import { LessonShell } from '../../components/LessonShell';

export function Ch1Lesson3() {
  return (
    <LessonShell lessonId="ch1-l3">
      <Section title="🌐 株はどこで取引されている？">
        <p>
          株は <strong>取引所（証券取引所）</strong> という場所で売買されています。
          売りたい人と買いたい人が集まる、いわば「株のマーケット」です。
          世界中に取引所がありますが、特に重要なのは以下の3つ。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ExchangeCard
            flag="🇯🇵"
            name="東証（東京証券取引所）"
            highlight="日本最大"
            desc="プライム・スタンダード・グロースの3市場。トヨタ、ソニー、任天堂など約3,900社が上場。"
          />
          <ExchangeCard
            flag="🇺🇸"
            name="NYSE（ニューヨーク証券取引所）"
            highlight="世界最大"
            desc="伝統的な大企業中心。コカ・コーラ、J&J、JPモルガンなど。時価総額は世界1位。"
          />
          <ExchangeCard
            flag="🇺🇸"
            name="NASDAQ（ナスダック）"
            highlight="ハイテク中心"
            desc="Apple、Microsoft、NVIDIA、Google、Amazon、Tesla など。テック企業の中心地。"
          />
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 他にも、ロンドン（LSE）、上海・深圳、香港（HKEX）、ユーロネクストなど。最近はインドの NSE/BSE も急成長中。
        </p>
      </Section>

      <Section title="🏷️ 「銘柄コード」で銘柄を識別する">
        <p>
          取引所では、会社ごとに <strong>固有の番号やアルファベット（ティッカー）</strong> がついています。
          注文を出すときはこれを入力します。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">市場</th>
                <th className="text-left p-2.5 border border-navy-100">会社名</th>
                <th className="text-left p-2.5 border border-navy-100">コード／ティッカー</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">東証</td><td className="p-2.5 border border-slate-200">トヨタ自動車</td><td className="p-2.5 border border-slate-200 font-mono">7203</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">東証</td><td className="p-2.5 border border-slate-200">任天堂</td><td className="p-2.5 border border-slate-200 font-mono">7974</td></tr>
              <tr><td className="p-2.5 border border-slate-200">NASDAQ</td><td className="p-2.5 border border-slate-200">Apple</td><td className="p-2.5 border border-slate-200 font-mono">AAPL</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">NASDAQ</td><td className="p-2.5 border border-slate-200">NVIDIA</td><td className="p-2.5 border border-slate-200 font-mono">NVDA</td></tr>
              <tr><td className="p-2.5 border border-slate-200">NYSE</td><td className="p-2.5 border border-slate-200">Coca-Cola</td><td className="p-2.5 border border-slate-200 font-mono">KO</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="💼 「証券口座」が取引の入口">
        <p>
          私たち個人が直接、取引所に注文を出すことはできません。
          <strong>証券会社</strong> が間に入り、私たちの注文を取引所に取り次ぎます。
          つまり、株を買うにはまず <strong>証券会社で口座を開く</strong> 必要があります。
        </p>

        <h3 className="text-lg mt-4 mb-2">📝 口座開設の流れ（日本の場合）</h3>
        <ol className="list-decimal pl-6 space-y-2 text-sm leading-relaxed">
          <li><strong>証券会社を選ぶ</strong>（ネット証券が手数料安くておすすめ。例：SBI証券、楽天証券、マネックス証券、松井証券）</li>
          <li><strong>口座開設をオンラインで申し込む</strong>（氏名・住所・職業など）</li>
          <li><strong>本人確認</strong>（マイナンバーカード or 運転免許証+通知カードをアップロード）</li>
          <li><strong>審査・郵送物受け取り</strong>（通常 数日〜1週間程度）</li>
          <li><strong>初回ログイン → 銀行口座から入金 → 取引開始！</strong></li>
        </ol>

        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900 mt-3">
          💡 開設時には <strong>「特定口座（源泉徴収あり）」</strong> を選ぶと、税金の計算・納付を証券会社がやってくれます。
          確定申告が不要になるので、初心者は基本これを選んでおけばOK。
        </p>
      </Section>

      <Section title="🆚 ネット証券 vs 対面証券">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100"></th>
                <th className="text-left p-2.5 border border-navy-100">ネット証券</th>
                <th className="text-left p-2.5 border border-navy-100">対面（店舗）証券</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200 font-semibold">手数料</td><td className="p-2.5 border border-slate-200">激安（国内株 無料が多い）</td><td className="p-2.5 border border-slate-200">高め</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">アドバイス</td><td className="p-2.5 border border-slate-200">基本なし（自分で判断）</td><td className="p-2.5 border border-slate-200">担当者が提案してくれる</td></tr>
              <tr><td className="p-2.5 border border-slate-200 font-semibold">取扱商品</td><td className="p-2.5 border border-slate-200">投信・米国株・ETF豊富</td><td className="p-2.5 border border-slate-200">独自IPO等あり</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">向いている人</td><td className="p-2.5 border border-slate-200">自分で学び自分で決めたい人</td><td className="p-2.5 border border-slate-200">手厚いサポートが欲しい人</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          現在はほとんどの個人投資家が <strong>ネット証券</strong> を使っています。手数料の差は長期では大きく、初心者でも操作は意外と直感的です。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 株は「取引所」で売買される（東証、NYSE、NASDAQ が主要3つ）</li>
            <li>✅ 銘柄ごとに識別コードがある（日本=4桁数字、米国=アルファベット）</li>
            <li>✅ 個人は証券口座を通じて取引する</li>
            <li>✅ 初心者はネット証券 + 特定口座（源泉徴収あり）が定番</li>
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

function ExchangeCard({ flag, name, highlight, desc }: { flag: string; name: string; highlight: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">{flag}</span>
        <span className="chip text-[10px]">{highlight}</span>
      </div>
      <div className="font-bold text-navy-900 text-sm">{name}</div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}
