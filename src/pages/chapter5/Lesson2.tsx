import { LessonShell } from '../../components/LessonShell';
import { DiversificationSim } from '../../components/interactives/DiversificationSim';

export function Ch5Lesson2() {
  return (
    <LessonShell lessonId="ch5-l2">
      <Section title="🥚 「卵を1つのカゴに盛るな」">
        <p>
          投資の世界で最も有名な格言の1つ：<strong>「Don't put all your eggs in one basket」</strong>。
          1つのカゴ（=1銘柄、1業種、1国）にお金を全部入れると、それが落ちた時に致命傷になります。
        </p>
        <p>
          経済学者の <strong>ハリー・マーコウィッツ</strong> はこの直感を数学的に証明し、ノーベル賞を受賞しました（1990年）。
          「分散投資は <strong>リターンを犠牲にせず</strong> リスクを下げる、ほぼ唯一の方法」と言われます。
        </p>
      </Section>

      <Section title="🧮 「相関」がカギ">
        <p>
          ただの「銘柄数を増やす」だけでは不十分。重要なのは <strong>値動きが似ていない（相関が低い）</strong> ものを組み合わせること。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <CorrelationCard
            value="1.0"
            color="rose"
            label="完全に同じ動き"
            desc="トヨタ株 と トヨタ株（同じ銘柄）"
            effect="分散効果ゼロ"
          />
          <CorrelationCard
            value="0.7〜0.9"
            color="amber"
            label="似た動き"
            desc="トヨタ株 と ホンダ株（同業種）"
            effect="分散効果はやや限定的"
          />
          <CorrelationCard
            value="-1.0〜0.3"
            color="emerald"
            label="逆方向 or 無関係"
            desc="株 と 金、株 と 国債"
            effect="リスク減少効果大"
          />
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 同じ業種・同じ国の銘柄を10個集めても「同じ動きをするカゴ10個」になりがち。
          <strong>業種、国、資産クラスをまたいだ分散</strong> が本物の分散です。
        </p>
      </Section>

      <Section title="🌐 3つの軸で分散する">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Axis emoji="🏢" name="① 銘柄分散"
            desc="同じ業種でも複数銘柄に分ける（同業他社の倒産でゼロにならない）"
            example="トヨタ + ホンダ + 日産"
          />
          <Axis emoji="🌏" name="② 地域分散"
            desc="国や地域をまたぐ（特定国の経済危機に巻き込まれない）"
            example="日本株 + 米国株 + 全世界株"
          />
          <Axis emoji="⏰" name="③ 時間分散"
            desc="一度に全額投入せず、買うタイミングを分散（高値掴みを回避）"
            example="毎月10万円ずつ積立"
          />
        </div>
        <p className="text-sm bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-emerald-900">
          ✨ <strong>全世界株インデックス投信（eMAXIS Slim 全世界株式 等）</strong> は、
          1本買うだけで世界数千社に銘柄&地域分散できる初心者の最強候補。
        </p>
      </Section>

      <Section title="🧪 シミュレーターで体感">
        <p>
          下の図で、銘柄数を増やすと値動きのブレ幅（リスク）がどう変わるか動かしてみよう。
          だいたい <strong>10〜20銘柄</strong> あたりで分散の効果が頭打ちになる現象も確認できます。
        </p>
      </Section>

      <DiversificationSim />

      <Section title="⚠️ 分散の落とし穴">
        <p>
          無限に分散すれば良いわけではありません。
        </p>
        <ul>
          <li>🪟 <strong>銘柄を増やしすぎる</strong> → どこも中途半端で、管理しきれない</li>
          <li>💸 <strong>「ホームバイアス」</strong>：自国株に偏りすぎ。日本株は世界の約6%、米国株は約60%</li>
          <li>📊 <strong>「市場リスク（システマティック・リスク）」</strong> は分散では消せない。市場全体が暴落するとどんなに分散しても下がる</li>
        </ul>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 分散投資は「リターンを犠牲にせずリスクを下げる」唯一の手法</li>
            <li>✅ 重要なのは銘柄数より、値動きが似ていない（相関が低い）こと</li>
            <li>✅ 銘柄・地域・時間の3軸で分散する</li>
            <li>✅ 全世界株インデックスファンドは「1本で広く分散」できる優れた選択肢</li>
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

function CorrelationCard({
  value,
  color,
  label,
  desc,
  effect,
}: {
  value: string;
  color: 'rose' | 'amber' | 'emerald';
  label: string;
  desc: string;
  effect: string;
}) {
  const bg = {
    rose: 'bg-rose-50/50 border-rose-100',
    amber: 'bg-amber-50/50 border-amber-100',
    emerald: 'bg-emerald-50/50 border-emerald-100',
  }[color];
  return (
    <div className={`card p-4 ${bg}`}>
      <div className="text-xs text-slate-500">相関係数</div>
      <div className="text-2xl font-bold font-mono text-navy-900">{value}</div>
      <div className="font-semibold text-sm mt-1">{label}</div>
      <p className="text-xs text-slate-700 mt-1 leading-relaxed">{desc}</p>
      <div className="text-[10px] text-slate-500 mt-2 font-semibold">効果: {effect}</div>
    </div>
  );
}

function Axis({ emoji, name, desc, example }: { emoji: string; name: string; desc: string; example: string }) {
  return (
    <div className="card p-4">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-bold text-navy-900 text-sm">{name}</div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
      <div className="text-[10px] text-slate-500 mt-2 font-mono">例: {example}</div>
    </div>
  );
}
