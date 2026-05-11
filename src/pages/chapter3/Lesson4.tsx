import { LessonShell } from '../../components/LessonShell';

export function Ch3Lesson4() {
  return (
    <LessonShell lessonId="ch3-l4">
      <Section title="💎 「割安」「割高」を判断するということ">
        <p>
          バリュエーション（Valuation）= 企業価値の評価。
          <strong>その会社の本当の価値はいくらか？を見積もる</strong> 作業です。
          現在の株価が本来の価値より安ければ「割安」、高ければ「割高」と判断します。
        </p>
        <p>
          代表的なアプローチは2つあります：<strong>マルチプル法</strong> と <strong>DCF法</strong>。
        </p>
      </Section>

      <Section title="① マルチプル法 — 倍率で比較する">
        <p>
          <strong>類似した会社</strong> の指標と比較して、その会社の妥当な価格を推定する方法。
          一番直感的で、実務で最もよく使われます。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="font-semibold mb-2 text-sm">具体例：A社の妥当株価を推定する</div>
          <ul className="text-sm space-y-1.5">
            <li>1. 同業の上場企業5社のPERを調べる</li>
            <li>2. 平均PERが18倍だった</li>
            <li>3. A社のEPSが200円なら → 妥当株価 ≈ 200 × 18 = <strong>3,600円</strong></li>
            <li>4. 現在A社の株価が 2,800円なら「割安かも」と判断</li>
          </ul>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 PER以外にも、PBR、PSR（株価売上倍率）、EV/EBITDA など状況に応じて使い分けます。
        </p>
      </Section>

      <Section title="② DCF法 — 将来のキャッシュを現在価値に">
        <p>
          DCF（ディスカウンテッド・キャッシュフロー）法は、
          <strong>「会社が将来生み出すであろうキャッシュを、今の価値に割り戻して合計する」</strong> 方法です。
          理論的にはこちらが正攻法ですが、未来予測が必要なので難易度は高め。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="font-semibold mb-2 text-sm">基本コンセプト</div>
          <div className="font-mono text-sm space-y-1">
            <div>未来のお金は、今のお金より価値が低い</div>
            <div className="text-slate-500">(同じ100円でも、今貰える方が良いよね？)</div>
          </div>
          <div className="font-mono text-sm mt-3">
            <div>1年後の100円 → 今だと約95円の価値（割引率5%の場合）</div>
            <div>10年後の100円 → 今だと約61円の価値</div>
          </div>
        </div>
        <p>
          この「未来のお金を今の価値に直す」割合のことを <strong>割引率</strong> といいます。
          会社の各年の予想キャッシュフローを割引率で現在価値に直し、全部足したものが企業価値の推定値です。
        </p>
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⚠️ DCFは <strong>「前提（成長率・割引率）が少し変わるだけで結果が大きく動く」</strong> という弱点があります。
          ナンバーワンの理論ですが、過信は禁物。
        </p>
      </Section>

      <Section title="🆚 マルチプル vs DCF どちらを使う？">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100"></th>
                <th className="text-left p-2.5 border border-navy-100">マルチプル法</th>
                <th className="text-left p-2.5 border border-navy-100">DCF法</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200 font-semibold">手軽さ</td><td className="p-2.5 border border-slate-200">◎ 手早い</td><td className="p-2.5 border border-slate-200">△ 重い</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">理論的正しさ</td><td className="p-2.5 border border-slate-200">△ 比較に依存</td><td className="p-2.5 border border-slate-200">○ 正攻法</td></tr>
              <tr><td className="p-2.5 border border-slate-200 font-semibold">前提の影響</td><td className="p-2.5 border border-slate-200">中</td><td className="p-2.5 border border-slate-200">大（前提次第で激変）</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">使われる場面</td><td className="p-2.5 border border-slate-200">日常の銘柄比較</td><td className="p-2.5 border border-slate-200">M&A、IPO審査</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          個人投資家にはまず <strong>マルチプル法</strong> で十分。
          DCFは「こういう考え方があるんだな」と知っておけばOK。
        </p>
      </Section>

      <Section title="⚖️ 安全マージンという考え方">
        <p>
          バリュー投資の父 <strong>ベンジャミン・グレアム</strong> が提唱した有名な考え方が
          <strong>「Margin of Safety（安全マージン）」</strong>。
        </p>
        <div className="card p-4 bg-emerald-50/40 border-emerald-100">
          <p className="text-sm leading-relaxed text-emerald-900">
            妥当株価を3,000円と見積もったとしても、その通り買うのではなく
            <strong>3割引きの2,100円以下になったら買う</strong> ようにする。
            これにより、もし自分の見積もりが間違っていても、損失が限定される。
          </p>
        </div>
        <p>
          バリュエーションは <strong>正確に当てるものではなく、判断に余裕を持たせるための道具</strong> と捉えるのが現実的。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ バリュエーション = 企業の本来の価値を見積もる作業</li>
            <li>✅ マルチプル法（PERなどで比較）は手軽で実用的</li>
            <li>✅ DCF法は理論的だが、前提次第で結果が大きくぶれる</li>
            <li>✅ 「安全マージン」で見積もり誤差を吸収するのが賢明</li>
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
