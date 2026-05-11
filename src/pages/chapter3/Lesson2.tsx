import { LessonShell } from '../../components/LessonShell';

export function Ch3Lesson2() {
  return (
    <LessonShell lessonId="ch3-l2">
      <Section title="📑 「財務3表」と呼ばれる3つの書類">
        <p>
          会社の成績を判断するには、<strong>3つの書類</strong> を見る必要があります。
          1つだけ見ても、会社の本当の姿は分かりません。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Card emoji="📈" name="損益計算書 (PL)" period="期間" focus="儲け（フロー）"
            desc="1年間でいくら売って、いくら利益を出したか" />
          <Card emoji="🏛️" name="貸借対照表 (BS)" period="ある一時点" focus="財産（ストック）"
            desc="今この瞬間、会社が何を持っているか・何を借りているか" />
          <Card emoji="💰" name="キャッシュフロー (CF)" period="期間" focus="現金の動き"
            desc="本当に現金が増えたか減ったか" />
        </div>
      </Section>

      <Section title="📈 損益計算書（PL）— 儲けの通信簿">
        <p>
          売上から段階的にコストを差し引いていき、最終的にいくら利益が残ったかを示します。
          ニュースで「営業利益が…」と語られるのはこの書類のこと。
        </p>
        <div className="card p-4 bg-slate-50/50 font-mono text-sm leading-relaxed">
          <div>売上高（トップライン）<span className="text-slate-500"> ─ 商品・サービスの売上総額</span></div>
          <div className="ml-4">− 売上原価</div>
          <div className="font-bold text-navy-900">＝ 売上総利益（粗利）</div>
          <div className="ml-4">− 販管費（人件費・広告費など）</div>
          <div className="font-bold text-emerald-700">＝ 営業利益 ⭐本業の儲け⭐</div>
          <div className="ml-4">± 営業外損益（為替差損益、受取利息など）</div>
          <div className="font-bold text-navy-900">＝ 経常利益</div>
          <div className="ml-4">± 特別損益、− 法人税</div>
          <div className="font-bold text-accent-dark">＝ 当期純利益（ボトムライン）</div>
        </div>
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          ⭐ 最も重要なのは <strong>営業利益</strong>（本業でいくら稼いだか）。これが右肩上がりの会社は健全。
        </p>
      </Section>

      <Section title="🏛️ 貸借対照表（BS）— 「持っている物」と「借りているもの」">
        <p>
          ある時点の財産状況を表します。<strong>左右が必ず一致する</strong> のが特徴で、これを「バランスシート」と呼ぶ所以です。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="font-bold text-navy-900 mb-2 pb-1 border-b border-slate-300">
                左：資産（持っているもの）
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>💵 現金・預金</li>
                <li>🧾 売掛金（未回収の売上）</li>
                <li>📦 在庫</li>
                <li>🏭 工場・建物・機械</li>
                <li>📊 投資有価証券</li>
              </ul>
            </div>
            <div>
              <div className="font-bold text-navy-900 mb-2 pb-1 border-b border-slate-300">
                右：負債 + 純資産（出どころ）
              </div>
              <ul className="space-y-1 text-slate-700">
                <li>📋 買掛金（未払いの仕入）</li>
                <li>🏦 借入金</li>
                <li>📑 社債</li>
                <li className="pt-1 border-t border-slate-200 mt-1.5">
                  💼 純資産（株主の出資金 + 内部留保）
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 <strong>自己資本比率（純資産 ÷ 総資産）</strong> が高いほど財務的に安全。製造業なら40%超、IT系なら60%超が一つの目安。
        </p>
      </Section>

      <Section title="💰 キャッシュフロー計算書（CF）— 現金は嘘をつかない">
        <p>
          PL の「利益」は、実は <strong>会計のルール上の計算結果</strong> に過ぎず、
          現金が本当に増えたかは別問題です（売上計上したが回収できていない、など）。
          そこで CF を見れば「本当のお金の動き」が見えます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <CFCard
            sign="営業CF"
            color="emerald"
            desc="本業で稼いだ現金。プラスが健全な会社の必須条件"
            example="売上の回収 − 仕入の支払い"
          />
          <CFCard
            sign="投資CF"
            color="rose"
            desc="将来のための投資。普通はマイナス（=使っている）が良い"
            example="工場建設、設備投資、M&A"
          />
          <CFCard
            sign="財務CF"
            color="slate"
            desc="株主・債権者とのお金のやりとり"
            example="借入、社債発行、配当の支払い"
          />
        </div>
        <p className="text-sm bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-emerald-900">
          ✨ 理想形は <strong>「営業CFプラス、投資CFマイナス、財務CFマイナス」</strong>。
          本業で稼いで、将来に投資して、株主に還元しつつ借金を返している、という健全企業の姿。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ <strong>PL</strong>：1年間の儲け（売上→営業利益→純利益の流れ）</li>
            <li>✅ <strong>BS</strong>：今この瞬間の財産。自己資本比率で安全度をチェック</li>
            <li>✅ <strong>CF</strong>：現金の動き。営業CFがプラスかどうかが超重要</li>
            <li>✅ 利益が出ていても現金が回らない「黒字倒産」もあるので CF は必ずチェック</li>
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

function Card({
  emoji,
  name,
  period,
  focus,
  desc,
}: {
  emoji: string;
  name: string;
  period: string;
  focus: string;
  desc: string;
}) {
  return (
    <div className="card p-4">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-bold text-navy-900 text-sm">{name}</div>
      <div className="text-[10px] text-slate-500 mt-1 space-x-2">
        <span>📅 {period}</span>
        <span>·</span>
        <span>🎯 {focus}</span>
      </div>
      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}

function CFCard({
  sign,
  desc,
  example,
  color,
}: {
  sign: string;
  desc: string;
  example: string;
  color: 'emerald' | 'rose' | 'slate';
}) {
  const bgMap = {
    emerald: 'bg-emerald-50/60 border-emerald-100',
    rose: 'bg-rose-50/60 border-rose-100',
    slate: 'bg-slate-50/80 border-slate-100',
  };
  return (
    <div className={`card p-4 ${bgMap[color]}`}>
      <div className="font-bold text-navy-900 mb-1">{sign}</div>
      <p className="text-xs text-slate-700 leading-relaxed">{desc}</p>
      <div className="text-[10px] text-slate-500 mt-2">例：{example}</div>
    </div>
  );
}
