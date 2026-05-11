import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export function Ch2Lesson2() {
  return (
    <LessonShell lessonId="ch2-l2">
      <Section title="🪙 「見えにくいコスト」が長期で効いてくる">
        <p>
          投資のリターンは、<strong>「グロスリターン（市場で得た利益）」− 「諸コスト」</strong> で決まります。
          コストが0.5%違うだけで、20年運用すると <strong>数十万〜数百万円</strong> の差になることも。
        </p>
        <p>
          コストを正しく理解しておくと、無駄に手数料を払わずに済みます。
        </p>
      </Section>

      <Section title="💸 投資にかかる3つのコスト">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <CostCard
            emoji="🛒"
            title="① 売買手数料"
            desc="株を売買するときに証券会社に払う。ネット証券では国内株は無料が増えています。"
          />
          <CostCard
            emoji="📊"
            title="② 信託報酬"
            desc="投信・ETFを保有している間ずっと払い続ける運用コスト。年率0.1〜2%程度。"
          />
          <CostCard
            emoji="🏛️"
            title="③ 税金"
            desc="利益に約20.315%。NISAなら非課税。"
          />
        </div>
      </Section>

      <Section title="① 売買手数料の今">
        <p>
          かつては1回の取引で数百〜数千円かかっていた手数料も、競争でほぼ無料に。
          ただし <strong>米国株や IPO 抽選</strong> では今でも手数料がかかる場合があるので、
          証券会社の手数料表は必ず確認しましょう。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[420px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">取引種別</th>
                <th className="text-left p-2.5 border border-navy-100">典型的な手数料（ネット証券）</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">国内株（現物）</td><td className="p-2.5 border border-slate-200">無料〜数百円</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">米国株</td><td className="p-2.5 border border-slate-200">約定代金の0.495%（税込・上限$22）</td></tr>
              <tr><td className="p-2.5 border border-slate-200">投資信託（買付）</td><td className="p-2.5 border border-slate-200">ノーロード（無料）が主流</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="② 信託報酬 — 「ずっと払い続ける」コスト">
        <p>
          投資信託・ETF を保有している間、<strong>毎日少しずつ自動的に差し引かれる</strong> 運用コスト。
          年率で表示され（例：年0.1%）、長期では大きな差になります。
        </p>
        <div className="card p-4 bg-amber-50/30 border-amber-100">
          <div className="font-semibold mb-2">💡 目安</div>
          <ul className="text-sm space-y-1">
            <li>✨ <strong>0.05〜0.2%</strong>：超低コストの優良インデックスファンド（eMAXIS Slim、SBI・V等）</li>
            <li>📍 <strong>0.5〜1%</strong>：普通のインデックスや一部アクティブ</li>
            <li>⚠️ <strong>1〜2%</strong>：高コストのアクティブファンド。慎重に</li>
          </ul>
        </div>
        <FeeImpactChart />
      </Section>

      <Section title="③ 税金 — NISAで合法的に「ゼロ」にできる">
        <p>
          通常、株式の利益（譲渡益・配当）には <strong>20.315%</strong> の税金がかかります。
          しかし NISA 口座内での取引なら <strong>非課税</strong>。長期で運用するならまずはNISA枠を使い切るのが鉄則です。
        </p>
        <div className="card p-4 bg-emerald-50/40 border-emerald-100">
          <div className="text-sm">
            <strong>例：</strong>100万円の利益が出た場合<br />
            通常口座 → 約 <strong className="text-rose-700">20万円</strong> が税金で消える<br />
            NISA口座 → 税金 <strong className="text-emerald-700">ゼロ</strong>、丸ごと手元に残る
          </div>
        </div>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ コストは 売買手数料・信託報酬・税金 の3つ</li>
            <li>✅ 売買手数料は無料化が進んでいるが、米国株などは要確認</li>
            <li>✅ 信託報酬は <strong>0.2%以下</strong> を目安に。長期では大きな差</li>
            <li>✅ 税金約20%は NISA で非課税にできる</li>
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

function CostCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-bold text-navy-900 text-sm">{title}</div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

// 信託報酬の差が30年でどれだけ影響するかを示すチャート
function FeeImpactChart() {
  // 元本 100万円、年5%リターンの場合、信託報酬 0.1% / 1% / 1.5%
  const data: { year: number; low: number; mid: number; high: number }[] = [];
  const principal = 1_000_000;
  for (let y = 0; y <= 30; y++) {
    data.push({
      year: y,
      low: Math.round(principal * Math.pow(1 + 0.05 - 0.001, y)),
      mid: Math.round(principal * Math.pow(1 + 0.05 - 0.01, y)),
      high: Math.round(principal * Math.pow(1 + 0.05 - 0.015, y)),
    });
  }
  return (
    <div className="card p-4 mt-3">
      <div className="text-sm font-semibold mb-1">
        100万円を年5%で運用したとき、信託報酬の差で30年後にいくら変わる？
      </div>
      <div className="h-60">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="year" tickFormatter={(v) => `${v}年`} tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => `${Math.round(v / 10000)}万`} tick={{ fontSize: 11 }} width={50} />
            <Tooltip
              formatter={(v) => `¥${Number(v).toLocaleString()}`}
              labelFormatter={(l) => `${l}年後`}
            />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="low" name="信託報酬 0.1%" stroke="#10b981" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="mid" name="信託報酬 1.0%" stroke="#f59e0b" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="high" name="信託報酬 1.5%" stroke="#ef4444" strokeWidth={2.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs text-slate-500 mt-2">
        わずか1%の差が、30年後には数百万円の違いになる — これが「コストの怖さ」。
      </div>
    </div>
  );
}
