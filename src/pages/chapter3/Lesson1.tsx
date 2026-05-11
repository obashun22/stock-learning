import { LessonShell } from '../../components/LessonShell';
import { ValuationCalculator } from '../../components/interactives/ValuationCalculator';

export function Ch3Lesson1() {
  return (
    <LessonShell lessonId="ch3-l1">
      <Section title="📐 4つの指標で会社を「測る」">
        <p>
          銘柄を分析するとき、まず最初に見るのが <strong>4つの基本指標</strong>。
          これだけで「この会社は今、割安？割高？どれくらい稼いでいる？」が大まかに分かります。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Pill name="PER" desc="価格 vs 利益" />
          <Pill name="PBR" desc="価格 vs 純資産" />
          <Pill name="ROE" desc="どれだけ効率的に稼ぐか" />
          <Pill name="配当利回り" desc="配当の利回り" />
        </div>
      </Section>

      <Section title="① PER（株価収益率）— 何年で元が取れる？">
        <div className="card p-4 bg-navy-50/50">
          <div className="text-sm text-slate-600">計算式</div>
          <div className="font-mono text-lg font-bold text-navy-900 mt-1">
            PER = 株価 ÷ 1株あたり利益 (EPS)
          </div>
        </div>
        <p>
          PER 15倍 = 「今の株価で買うと、その会社が15年分の利益を稼げば元が取れる」 と解釈できます。
          <strong>低いほど割安</strong>。ただし業種で平均値が違います。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[420px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">市場・業種</th>
                <th className="text-left p-2.5 border border-navy-100">PER の目安</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">東証プライム平均</td><td className="p-2.5 border border-slate-200">14〜16倍</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">S&P500 平均</td><td className="p-2.5 border border-slate-200">18〜22倍</td></tr>
              <tr><td className="p-2.5 border border-slate-200">高成長テック株（米）</td><td className="p-2.5 border border-slate-200">30〜80倍も普通</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">成熟した銀行・商社</td><td className="p-2.5 border border-slate-200">8〜12倍</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⚠️ PERが極端に低い時は「成長性が乏しい」「業績悪化が予想されている」など、<strong>安いだけの理由</strong> があることも。
          単に数字だけで「割安だ！」と飛びつかないようにしましょう。
        </p>
      </Section>

      <Section title="② PBR（株価純資産倍率）— 解散価値との比較">
        <div className="card p-4 bg-navy-50/50">
          <div className="text-sm text-slate-600">計算式</div>
          <div className="font-mono text-lg font-bold text-navy-900 mt-1">
            PBR = 株価 ÷ 1株あたり純資産 (BPS)
          </div>
        </div>
        <p>
          会社が今すぐ解散して、資産を全部現金化したら株主に分配される額が <strong>BPS</strong>。
          PBR 1倍 = 「株価と解散価値が同じ」、1倍割れ = 「解散価値より安く買える」。
        </p>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 日本市場ではPBR 1倍割れの企業が多く、東証は2023年から <strong>「PBR1倍割れ企業」に改善を求める要請</strong> を出しました。
          これは日本株市場の「お買い得」要因の一つです。
        </p>
      </Section>

      <Section title="③ ROE（自己資本利益率）— 効率の良さ">
        <div className="card p-4 bg-navy-50/50">
          <div className="text-sm text-slate-600">計算式</div>
          <div className="font-mono text-lg font-bold text-navy-900 mt-1">
            ROE = 純利益 ÷ 自己資本 × 100%
          </div>
        </div>
        <p>
          株主から預かったお金（自己資本）を使って、どれだけ効率良く利益を出しているかを示します。
          <strong>ROE 10% = 株主のお金を100万円預けたら、年間10万円稼いでくれる</strong>イメージ。
        </p>
        <ul>
          <li>🇯🇵 日本企業の平均：<strong>8〜9%</strong>（伝統的に低め）</li>
          <li>🇺🇸 米国企業の平均：<strong>15%前後</strong>（株主還元意識が高い）</li>
        </ul>
      </Section>

      <Section title="④ 配当利回り — 現金で受け取れるリターン">
        <div className="card p-4 bg-navy-50/50">
          <div className="text-sm text-slate-600">計算式</div>
          <div className="font-mono text-lg font-bold text-navy-900 mt-1">
            配当利回り = 1株配当 ÷ 株価 × 100%
          </div>
        </div>
        <p>
          銀行預金の利息のようなもの。<strong>3%超</strong> で「高配当銘柄」と呼ばれることが多いです。
          ただし <strong>極端に高い（7%超など）</strong> 場合は、株価が下がっているか、近く減配の懸念があることも。
        </p>
      </Section>

      <Section title="🧮 指標電卓で実際の銘柄を見てみよう">
        <p>
          下の電卓は、株価・EPS・BPSなどを入力すると指標を計算します。プリセットからリアルな数値感も掴めます。
        </p>
      </Section>

      <ValuationCalculator />

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ <strong>PER</strong>：利益の何倍まで買われているか。低いほど割安だが業種を見る</li>
            <li>✅ <strong>PBR</strong>：純資産の何倍か。1倍割れは要注目</li>
            <li>✅ <strong>ROE</strong>：お金の使い方の効率。10%以上が一つの目安</li>
            <li>✅ <strong>配当利回り</strong>：3%超で高配当銘柄。極端な高さは要警戒</li>
            <li>✅ 必ず <strong>「業種平均と比較する」</strong> こと</li>
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

function Pill({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="card p-3 text-center">
      <div className="font-bold text-navy-900">{name}</div>
      <div className="text-[11px] text-slate-500 mt-0.5">{desc}</div>
    </div>
  );
}
