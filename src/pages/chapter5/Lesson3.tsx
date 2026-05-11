import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export function Ch5Lesson3() {
  return (
    <LessonShell lessonId="ch5-l3">
      <Section title="🥧 アセットアロケーション = 資産の配分">
        <p>
          ポートフォリオ全体を「株式・債券・現金・不動産・コモディティ…」など <strong>資産クラス（アセット）に分けて配分する</strong> ことを
          <strong>アセットアロケーション</strong> と呼びます。
        </p>
        <p>
          実は、長期的なリターンの <strong>9割以上</strong> はこの配分（銘柄選びではなく！）で決まる、という研究があります。
          つまり <strong>「何の銘柄を買うか」より、何の資産クラスにどれだけ配分するか</strong> が決定的に重要。
        </p>
      </Section>

      <Section title="💎 主要な資産クラス">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <Asset emoji="📈" name="株式" risk="高" ret="高" />
          <Asset emoji="📑" name="債券" risk="低-中" ret="低-中" />
          <Asset emoji="💵" name="現金" risk="ほぼ無" ret="ほぼ無" />
          <Asset emoji="🏠" name="不動産（REIT）" risk="中" ret="中" />
          <Asset emoji="🪙" name="金（コモディティ）" risk="中" ret="不安定" />
          <Asset emoji="₿" name="暗号資産" risk="極高" ret="極高/極低" />
        </div>
      </Section>

      <Section title="🎂 年齢・目的別の典型的なアセアロ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <AllocationCard
            label="🌱 20-30代（積極型）"
            stock={85}
            bond={10}
            cash={5}
            note="運用期間が長いので、暴落しても回復を待てる。株式比率を高めに"
          />
          <AllocationCard
            label="🌳 40-50代（バランス型）"
            stock={60}
            bond={30}
            cash={10}
            note="教育・住宅などの出費に備えつつ、まだ成長は重視"
          />
          <AllocationCard
            label="🍂 60代以上（保守型）"
            stock={30}
            bond={50}
            cash={20}
            note="取り崩しが近いため、価格変動を抑えて元本を守る"
          />
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 古典的な目安「<strong>株式比率（%）= 110 − 年齢</strong>」。30歳なら 80%、60歳なら 50% が株式という単純式。
        </p>
      </Section>

      <Section title="🔄 リバランス — 「歪み」を整える">
        <p>
          時間が経つと、値動きで配分が崩れます。例えば「株60% / 債券40%」で始めても、株が大きく上がれば「株75% / 債券25%」になることも。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="font-semibold mb-2">リバランスの2つの方法</div>
          <ul className="text-sm space-y-1.5">
            <li>
              <strong>① 売って買い直す</strong>：増えた資産を売って、減った資産を買い足す
              （税金がかかるので、NISA枠で取引するのが基本）
            </li>
            <li>
              <strong>② 追加投資で調整する</strong>：新規の積立を「減った側」に多めに振る
              （売買せずに調整できるので税金対策に◯）
            </li>
          </ul>
        </div>
        <p>
          頻度は <strong>年1回 or 配分が ±5%以上ズレた時</strong> が目安。毎日見直すと売買コストで損します。
        </p>
      </Section>

      <Section title="🎯 ベストはあなただけのアセアロ">
        <p>
          理想のアセアロは <strong>個人の事情によって違います</strong>。次の質問を考えてみましょう。
        </p>
        <ul>
          <li>1. このお金を何のために使うか？（老後、住宅、教育…）</li>
          <li>2. 何年後に使う予定か？（短いほど安全寄り）</li>
          <li>3. もし暴落で半分になっても耐えられるか？</li>
          <li>4. 投資以外に安定収入があるか？</li>
        </ul>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ アセットアロケーション = 資産クラスごとの配分</li>
            <li>✅ 長期リターンの9割以上を決める最重要要素</li>
            <li>✅ 年齢・目的・性格で配分を決める（株式 = 110 − 年齢 は古典的目安）</li>
            <li>✅ 年1回 or ±5%以上ずれたら「リバランス」で整える</li>
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

function Asset({ emoji, name, risk, ret }: { emoji: string; name: string; risk: string; ret: string }) {
  return (
    <div className="card p-3">
      <div className="flex items-center gap-1.5">
        <span>{emoji}</span>
        <span className="font-bold text-sm text-navy-900">{name}</span>
      </div>
      <div className="text-[10px] text-slate-500 mt-1 space-x-1">
        <span>リスク：{risk}</span>
        <span>·</span>
        <span>リターン：{ret}</span>
      </div>
    </div>
  );
}

function AllocationCard({
  label,
  stock,
  bond,
  cash,
  note,
}: {
  label: string;
  stock: number;
  bond: number;
  cash: number;
  note: string;
}) {
  const data = [
    { name: '株式', value: stock, color: '#f59e0b' },
    { name: '債券', value: bond, color: '#3b82f6' },
    { name: '現金', value: cash, color: '#94a3b8' },
  ];
  return (
    <div className="card p-4">
      <div className="font-bold text-navy-900 text-sm mb-2">{label}</div>
      <div className="h-44">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" innerRadius={32} outerRadius={64} paddingAngle={2}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `${v}%`} />
            <Legend wrapperStyle={{ fontSize: 10 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{note}</p>
    </div>
  );
}
