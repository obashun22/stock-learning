import { LessonShell } from '../../components/LessonShell';

export function MoneyJourney() {
  return (
    <LessonShell lessonId="intro-money-journey">
      <Section title="🧭 まずはざっくり全体像">
        <p>
          株式投資は、突き詰めれば <strong>「会社の一部を買って、その会社が育つことで利益を得る」</strong> 仕組みです。
          細かい用語に入る前に、お金がどんな旅をするのか、流れだけを掴んでおきましょう。
        </p>
      </Section>

      <JourneyDiagram />

      <Section title="① お金を「証券口座」に入れる">
        <p>
          まず、株を買うための専用の財布である <strong>証券口座</strong> を作ります（楽天証券・SBI証券・マネックスなど）。
          銀行口座から証券口座に <strong>入金</strong> すると、ここに残高が積まれます。
        </p>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 銀行口座と証券口座は別物。証券口座は「株を売買するための財布」と覚えれば OK。
        </p>
      </Section>

      <Section title="② 「何を買うか」を決める">
        <p>
          ここが投資の本丸です。判断材料は大きく3つあります。
        </p>
        <ul>
          <li>
            <strong>ファンダメンタルズ</strong>：その会社は儲かっているか？決算書や指標（PER・ROE等）を見る
          </li>
          <li>
            <strong>テクニカル</strong>：株価の動きやチャートのパターン
          </li>
          <li>
            <strong>マクロ環境</strong>：景気・金利・為替・業界トレンド
          </li>
        </ul>
        <p>
          初心者は <strong>「自分が使っている／知っている会社」</strong> か、
          <strong>「多くの会社をまとめて買えるインデックス投資信託・ETF」</strong> から始めるのが王道です。
        </p>
      </Section>

      <Section title="③ 注文を出す → 約定する">
        <p>
          証券口座のアプリで銘柄コード（例：トヨタ＝7203、Apple＝AAPL）を入力し、
          <strong>「いくらで何株買うか」</strong> を指定して注文を出します。
          条件が市場の取引と合致すると <strong>約定（やくじょう）</strong> し、晴れて株主になります。
        </p>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 「成行（なりゆき）」＝今の値段でいいから今すぐ買う。「指値（さしね）」＝この値段になったら買う。
          詳しくは Chapter 2 で扱います。
        </p>
      </Section>

      <Section title="④ 株を「保有」している間に起こる2つの利益">
        <p>
          株を持っている間、利益が生まれる経路は大きく2つあります。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card p-4">
            <div className="text-2xl mb-1">💰</div>
            <div className="font-bold text-navy-900">A. 配当（インカムゲイン）</div>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              会社が稼いだ利益の一部を、株主に「ありがとう」として現金で配ってくれるもの。
              年1〜2回が多く、銀行口座の利息より高利回りなことも。
            </p>
          </div>
          <div className="card p-4">
            <div className="text-2xl mb-1">📈</div>
            <div className="font-bold text-navy-900">B. 値上がり益（キャピタルゲイン）</div>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              買った時より株価が上がっていれば、売った時の差額が利益になる。
              逆に下がっていれば <strong className="text-danger">損失</strong>。
            </p>
          </div>
        </div>
        <p>
          ほかにも、年に1回もらえる <strong>株主優待</strong>（日本株特有）や、株式分割など、
          副次的なメリットもあります。
        </p>
      </Section>

      <Section title="⑤ 売却 → 出金 → 銀行口座へ">
        <p>
          売りたいタイミングで <strong>売却注文</strong> を出します。約定すると、
          証券口座に <strong>「株 → 現金」</strong> として戻ってきます。
          そこから銀行口座へ <strong>出金</strong> すれば、ようやく ATM で引き出せる「使えるお金」になります。
        </p>
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⚠️ 利益が出た場合、約 <strong>20.315%</strong>（所得税・住民税・復興特別所得税）の税金がかかります。
          ただし <strong>NISA 口座</strong>を使えば非課税！（Chapter 1 Lesson 4 で詳しく）
        </p>
      </Section>

      <Section title="🎯 まとめると…">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ol className="space-y-2 text-sm leading-relaxed">
            <li><strong>1.</strong> 証券口座を開いて入金する</li>
            <li><strong>2.</strong> 何を買うか決める（業績・チャート・マクロ環境を見る）</li>
            <li><strong>3.</strong> 注文を出して株主になる</li>
            <li><strong>4.</strong> 配当 or 値上がり益で利益を得る（逆に下がれば損）</li>
            <li><strong>5.</strong> 売却 → 出金で手元のお金に戻す（税金約20%が引かれる、NISAなら非課税）</li>
          </ol>
        </div>
        <p>
          次の章からは、この各ステップを <strong>「もう一段詳しく」</strong> 学んでいきます。
          いまは細部まで覚える必要はありません。「お金の旅」のかたちが頭に入っていればOKです。
        </p>
      </Section>
    </LessonShell>
  );
}

// 共通の見出し付きセクション
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="prose-jp">
      <h2 className="text-xl sm:text-2xl mb-2 mt-4">{title}</h2>
      {children}
    </section>
  );
}

// SVGでお金の旅をフロー図示
function JourneyDiagram() {
  const steps = [
    { emoji: '🏦', label: '銀行口座' },
    { emoji: '💼', label: '証券口座' },
    { emoji: '🛒', label: '銘柄選び・注文' },
    { emoji: '📊', label: '保有（株主）' },
    { emoji: '💸', label: '売却 or 配当' },
    { emoji: '🏦', label: '銀行口座へ戻る' },
  ];
  return (
    <div className="card p-4 sm:p-6 overflow-x-auto">
      <div className="flex items-center justify-between gap-2 min-w-[640px]">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center text-center w-24 sm:w-28">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-navy-50 to-white border border-navy-100 flex items-center justify-center text-2xl sm:text-3xl shadow-soft">
                {s.emoji}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-navy-800 mt-2 leading-tight">
                {s.label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex flex-col items-center">
                <div className="text-accent">→</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-slate-500 text-center">
        ※ 横スクロールで全体を確認できます
      </div>
    </div>
  );
}
