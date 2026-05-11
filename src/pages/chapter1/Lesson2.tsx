import { LessonShell } from '../../components/LessonShell';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell } from 'recharts';

export function Ch1Lesson2() {
  return (
    <LessonShell lessonId="ch1-l2">
      <Section title="💡 たった一文で言うと">
        <div className="card p-5 bg-gradient-to-br from-amber-50 to-white border-amber-100">
          <p className="text-base sm:text-lg leading-relaxed font-medium text-amber-900">
            株価は「<strong>その株を買いたい人</strong>」と「<strong>売りたい人</strong>」のバランスで決まる。
            買いたい人が多ければ上がり、売りたい人が多ければ下がる。それだけ。
          </p>
        </div>
        <p>
          「えっ、もっと複雑な計算式があるんじゃないの？」と思うかもしれませんが、根本はこれだけです。
          ただし、人々の <strong>「買いたい／売りたい」の気持ちを動かす要因</strong> は色々あります。それが次のテーマ。
        </p>
      </Section>

      <Section title="🌊 株価を動かす4つの力">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ForceCard
            emoji="📊"
            title="① 業績"
            desc="会社が儲かれば株価は上がりやすい。決算発表（年4回）は最大のイベント。"
          />
          <ForceCard
            emoji="🏦"
            title="② 金利"
            desc="金利が下がるとお金が株に流れて上がりやすい。金利上昇は逆風。"
          />
          <ForceCard
            emoji="🌏"
            title="③ マクロ環境"
            desc="景気・為替・原油・政治・戦争・パンデミックなど。広く社会の動き全般。"
          />
          <ForceCard
            emoji="🧠"
            title="④ 投資家心理"
            desc="楽観・悲観・群集心理。短期では業績以上に株価を動かすことも。"
          />
        </div>
      </Section>

      <Section title="📈 ① 業績 — 一番分かりやすい王道">
        <p>
          会社が <strong>たくさん儲けているほど</strong>、その株は人気が出て買われ、価格が上がります。
          特に <strong>「予想より良かった／悪かった」</strong> が重要で、市場の期待値とのズレで株価が大きく動きます。
        </p>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 「決算でEPS（1株あたり利益）が予想を10%上回った → 株価が翌日10%急騰」のような動きはよくある話。
        </p>
      </Section>

      <Section title="🏦 ② 金利 — 株価を動かす隠れた巨人">
        <p>
          金利は <strong>「お金の値段」</strong>。金利が下がるとローンが組みやすくなり、企業は投資が、個人は消費がしやすくなって景気が良くなる傾向。
          また、債券の利息が低くなるので、<strong>「だったら株で増やそう」</strong> とお金が株式市場に流れ込みます。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="font-semibold mb-2 text-sm">金利と株価の典型的な関係</div>
          <ul className="text-sm space-y-1">
            <li>📉 金利低下 → 株価が上がりやすい</li>
            <li>📈 金利上昇 → 株価が下がりやすい（特にハイテク・グロース株）</li>
          </ul>
        </div>
        <p>
          2022〜2023年に米国のハイテク株が大きく下落したのは、米FRBが急速に金利を引き上げたためです。
        </p>
      </Section>

      <Section title="🌍 ③ マクロ環境 — 世の中の大きな流れ">
        <p>
          景気拡大局面では多くの会社の業績が良くなるため、株価全体が上がりやすくなります。逆に景気後退は下落要因。
          為替（円安／円高）も <strong>輸出企業（トヨタ等）</strong> と <strong>輸入企業</strong> に正反対の影響を与えます。
        </p>
      </Section>

      <Section title="🧠 ④ 投資家心理 — 短期の最大の敵">
        <p>
          長期的には株価は業績に収束しますが、<strong>短期では「市場参加者の気分」</strong> で大きく動きます。
          パニック売り、過剰な期待による買い ── これらは合理的な値付けから一時的にズレを生みます。
        </p>
        <BehaviorBars />
      </Section>

      <Section title="🎯 結局どう向き合えばいい？">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ <strong>短期</strong>の値動きは「気まぐれ」と割り切る</li>
            <li>✅ <strong>長期</strong>では業績がジワジワと反映される</li>
            <li>✅ 4つの要因（業績・金利・マクロ・心理）の <strong>どれが今主役か</strong> を意識する</li>
            <li>✅ 自分が買う理由・売る理由を明確にする（理由なき行動が一番危ない）</li>
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

function ForceCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">{emoji}</span>
        <span className="font-bold text-navy-900">{title}</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

// 心理が値動きに与える影響の図示
function BehaviorBars() {
  const data = [
    { label: '楽観相場', value: 12, color: '#10b981' },
    { label: '普通の地合い', value: 5, color: '#94a3b8' },
    { label: 'パニック相場', value: -18, color: '#ef4444' },
  ];
  return (
    <div className="card p-4">
      <div className="text-sm font-semibold mb-2">投資家心理ごとの典型的な月間変動率（例）</div>
      <div className="h-44">
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="label" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11 }} width={40} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
