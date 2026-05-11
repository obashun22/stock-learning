import { LessonShell } from '../../components/LessonShell';

export function Ch3Lesson3() {
  return (
    <LessonShell lessonId="ch3-l3">
      <Section title="🏭 同じ「会社」でも、業種で評価軸が違う">
        <p>
          自動車メーカーとIT企業を同じ物差しで測ったら、不公平です。
          投資ではまず <strong>「この会社はどの業種か？」</strong> を理解し、その業種の特性に合わせて評価することが大事。
        </p>
      </Section>

      <Section title="🗂️ 11のセクター（GICS分類）">
        <p>
          世界的に使われる業種分類「GICS」では、株式市場の全企業を <strong>11セクター</strong> に分類しています。
          ざっくり覚えておくと、世界経済の構造が見えてきます。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Sector emoji="💻" name="情報技術" example="Apple, Microsoft" />
          <Sector emoji="🏥" name="ヘルスケア" example="J&J, ノバルティス" />
          <Sector emoji="🛒" name="生活必需品" example="P&G, 花王" />
          <Sector emoji="🚗" name="一般消費財" example="トヨタ, Tesla" />
          <Sector emoji="🏦" name="金融" example="三菱UFJ, JPM" />
          <Sector emoji="📡" name="通信サービス" example="ソフトバンク, Google" />
          <Sector emoji="🏭" name="資本財" example="日立, GE" />
          <Sector emoji="🛢️" name="エネルギー" example="JX, ExxonMobil" />
          <Sector emoji="⚒️" name="素材" example="信越化, BHP" />
          <Sector emoji="⚡" name="公益事業" example="東京電力, NextEra" />
          <Sector emoji="🏠" name="不動産" example="三井不動産, Prologis" />
        </div>
      </Section>

      <Section title="📊 景気との関係：シクリカルとディフェンシブ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card p-4 bg-amber-50/30 border-amber-100">
            <div className="font-bold text-amber-900">🌊 シクリカル（景気敏感）</div>
            <p className="text-sm text-amber-900/80 mt-1 leading-relaxed">
              景気の波で業績が大きくぶれる。好況時に強く、不況時に弱い。
            </p>
            <div className="text-xs text-amber-800 mt-2">
              <strong>例：</strong> 自動車、機械、半導体、不動産、銀行、海運
            </div>
          </div>
          <div className="card p-4 bg-emerald-50/30 border-emerald-100">
            <div className="font-bold text-emerald-900">🛡️ ディフェンシブ（景気抵抗力あり）</div>
            <p className="text-sm text-emerald-900/80 mt-1 leading-relaxed">
              景気に関係なく需要が安定。不況時に底堅い動き。
            </p>
            <div className="text-xs text-emerald-800 mt-2">
              <strong>例：</strong> 食品、医薬品、日用品、電力・ガス、通信
            </div>
          </div>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 ポートフォリオの中に両タイプを混ぜると、どんな景気局面でも極端な動きをしにくくなります。
        </p>
      </Section>

      <Section title="🌱 グロース株 vs 🍞 バリュー株">
        <p>
          投資スタイルとして、銘柄選びの「方針」を表すよく使う2つの言葉。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100"></th>
                <th className="text-left p-2.5 border border-navy-100">グロース株</th>
                <th className="text-left p-2.5 border border-navy-100">バリュー株</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200 font-semibold">期待</td><td className="p-2.5 border border-slate-200">将来の高成長</td><td className="p-2.5 border border-slate-200">業績の安定 + 配当</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">PER</td><td className="p-2.5 border border-slate-200">高い（30〜80倍も）</td><td className="p-2.5 border border-slate-200">低い（5〜15倍）</td></tr>
              <tr><td className="p-2.5 border border-slate-200 font-semibold">配当</td><td className="p-2.5 border border-slate-200">少ない/なし</td><td className="p-2.5 border border-slate-200">多い</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">代表例</td><td className="p-2.5 border border-slate-200">NVIDIA, Tesla, メルカリ</td><td className="p-2.5 border border-slate-200">三菱UFJ, KO, 商社</td></tr>
              <tr><td className="p-2.5 border border-slate-200 font-semibold">向く局面</td><td className="p-2.5 border border-slate-200">金利低下・好況・期待</td><td className="p-2.5 border border-slate-200">金利上昇・不況・避難</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          どちらか一方が「正解」ではありません。<strong>両方を組み合わせる</strong> のが現実的なポートフォリオ構築です。
        </p>
      </Section>

      <Section title="🔍 ビジネスモデルを読み解く5つの問い">
        <ol className="space-y-2 text-sm leading-relaxed">
          <li><strong>1. 誰に売っているか？</strong>（個人/法人、国内/海外）</li>
          <li><strong>2. 何を売っているか？</strong>（モノ/サービス/サブスク）</li>
          <li><strong>3. どうやって儲けているか？</strong>（売上単価 × 数量、手数料、広告など）</li>
          <li><strong>4. 競合は誰？参入障壁は？</strong>（「自社の強み」が継続的か）</li>
          <li><strong>5. 成長ドライバーは？</strong>（新市場、海外、新商品 etc.）</li>
        </ol>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 これに即答できる会社は <strong>あなたが理解できている会社</strong>。
          理解できない会社には投資しない、というのも立派なルールです（バフェットの哲学）。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 11セクター分類で世界経済の構造をざっくり把握</li>
            <li>✅ シクリカル（景気敏感）とディフェンシブ（景気抵抗）を混ぜると安定</li>
            <li>✅ グロース株は将来期待、バリュー株は今の収益と配当を重視</li>
            <li>✅ 「ビジネスモデルを5つの問いで説明できるか」が投資判断の出発点</li>
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

function Sector({ emoji, name, example }: { emoji: string; name: string; example: string }) {
  return (
    <div className="card p-3">
      <div className="flex items-center gap-1.5">
        <span>{emoji}</span>
        <span className="font-bold text-sm text-navy-900">{name}</span>
      </div>
      <div className="text-[10px] text-slate-500 mt-1">{example}</div>
    </div>
  );
}
