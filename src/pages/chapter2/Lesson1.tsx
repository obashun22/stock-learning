import { LessonShell } from '../../components/LessonShell';
import { OrderBookSim } from '../../components/interactives/OrderBookSim';

export function Ch2Lesson1() {
  return (
    <LessonShell lessonId="ch2-l1">
      <Section title="🤔 「注文する」と何が起こる？">
        <p>
          証券アプリで「買う」ボタンを押すと、その注文は <strong>証券取引所</strong> に送られ、
          そこに集まった他の参加者の注文と <strong>マッチング（突き合わせ）</strong> されます。
          条件が合えば <strong>約定（やくじょう）</strong> し、あなたは株主に。
        </p>
        <p>
          注文の出し方には大きく <strong>「成行（なりゆき）」</strong> と <strong>「指値（さしね）」</strong> の2種類があります。
        </p>
      </Section>

      <Section title="⚡ 成行注文 — 「いくらでもいい、今すぐ」">
        <div className="card p-4 bg-rose-50/50 border-rose-100">
          <div className="font-semibold text-rose-900 mb-1">✅ メリット</div>
          <ul className="text-sm space-y-1 text-rose-900/80">
            <li>・ほぼ確実にすぐ約定する</li>
            <li>・注文操作がシンプル</li>
          </ul>
          <div className="font-semibold text-rose-900 mt-3 mb-1">⚠️ デメリット</div>
          <ul className="text-sm space-y-1 text-rose-900/80">
            <li>・約定価格をコントロールできない</li>
            <li>・流動性が低い銘柄では <strong>予想外の高値（安値）で約定</strong> することも</li>
          </ul>
        </div>
        <p>
          急に動意づいた銘柄を「とにかく今買いたい」「下落が止まらない、今すぐ売って逃げたい」というシーンで使います。
          ただし、出来高が少ない銘柄では使うべきではありません（後述の板スカスカ問題）。
        </p>
      </Section>

      <Section title="🎯 指値注文 — 「この値段になったら」">
        <div className="card p-4 bg-emerald-50/50 border-emerald-100">
          <div className="font-semibold text-emerald-900 mb-1">✅ メリット</div>
          <ul className="text-sm space-y-1 text-emerald-900/80">
            <li>・自分が納得する価格でしか取引が成立しない</li>
            <li>・想定外の価格で約定するリスクがない</li>
          </ul>
          <div className="font-semibold text-emerald-900 mt-3 mb-1">⚠️ デメリット</div>
          <ul className="text-sm space-y-1 text-emerald-900/80">
            <li>・<strong>そもそも約定しない可能性</strong>がある（株価が指値に届かない）</li>
            <li>・「あと1円届かなくて買えなかった…」みたいなことも</li>
          </ul>
        </div>

        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 多くの投資家は <strong>「買いは指値、急ぐときだけ成行」</strong> を基本にしています。
          売りも同様で、損切りラインの近くなど「今すぐ逃げる」場面以外は指値が無難。
        </p>
      </Section>

      <Section title="🛑 逆指値 — 損失を限定する保険">
        <p>
          <strong>逆指値（ぎゃくさしね）</strong> は、指値とは逆の発想で
          <strong>「ここまで下がったら売る」</strong>「<strong>ここまで上がったら買う</strong>」と注文しておく仕組み。
          特に <strong>損切り（ストップロス）</strong> 用途で使います。
        </p>
        <div className="card p-4 bg-slate-50/50 border-slate-100">
          <div className="font-semibold mb-2">📌 使用例</div>
          <ul className="text-sm space-y-1.5">
            <li>1,000円で買った株 → 「900円まで下がったら売る」逆指値を入れておく</li>
            <li>→ 株価が900円にタッチした瞬間に売り注文が発動し、損失が約10%で限定される</li>
            <li>→ 寝ている間に暴落しても自動で逃げられる</li>
          </ul>
        </div>
      </Section>

      <Section title="📖 「板（いた）」を読めるようになろう">
        <p>
          <strong>板</strong> とは、その銘柄の現在の <strong>売り注文と買い注文の一覧</strong>。
          縦に価格、左右に売り板・買い板が並ぶ表です。
        </p>
        <ul>
          <li>📕 <strong>売り板（赤）</strong>：「この値段で売りたい人がいるよ」のリスト</li>
          <li>📗 <strong>買い板（緑）</strong>：「この値段で買いたい人がいるよ」のリスト</li>
          <li>真ん中の境目あたりが「<strong>気配値（けはいね）</strong>」と呼ばれる現在の取引価格</li>
        </ul>
        <p>
          下のシミュレーターで、実際に注文を出して板の変化を体感してみよう。
        </p>
      </Section>

      <OrderBookSim />

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ <strong>成行</strong>：価格より速さ重視。すぐ約定するが、価格は市場任せ</li>
            <li>✅ <strong>指値</strong>：価格コントロール重視。約定しないリスクと引き換え</li>
            <li>✅ <strong>逆指値</strong>：「ここまで来たら〜」のトリガー注文。損切りで活躍</li>
            <li>✅ 板を読む習慣をつけると、流動性や需給が見えてくる</li>
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
