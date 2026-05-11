import { LessonShell } from '../../components/LessonShell';

export function JapanStocks() {
  return (
    <LessonShell lessonId="adv-jp">
      <Section title="🇯🇵 日本株市場の特徴">
        <p>
          東京証券取引所には約3,900社が上場しています。
          学んだ理論を <strong>実際の銘柄</strong> に当てはめると、ぐっと身近に感じられます。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="プライム市場" value="約1,600社" desc="大企業中心" />
          <StatCard label="スタンダード市場" value="約1,600社" desc="中堅企業" />
          <StatCard label="グロース市場" value="約600社" desc="新興・成長企業" />
          <StatCard label="日経225 / TOPIX" value="主要指数" desc="日本株全体の指標" />
        </div>
        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
          💎 日本株の特徴：株主優待がある銘柄が多い／PBR1倍割れ企業が多い／配当性向の上昇トレンド
        </p>
      </Section>

      <Section title="🚗 例① トヨタ自動車（7203）— 世界一の自動車メーカー">
        <CompanyCard
          name="トヨタ自動車"
          code="7203"
          sector="一般消費財・自動車"
          businessModel="自動車の製造・販売（世界販売台数No.1）。日本国内の他、北米・中国・欧州など世界で展開。HV/EV/水素など多様な戦略。"
          checkpoint={[
            { label: 'PER', value: '約10倍前後（業界平均と同程度）', tone: 'mid' },
            { label: 'PBR', value: '約1〜1.5倍（自動車の中では普通）', tone: 'mid' },
            { label: 'ROE', value: '約10〜13%（日本企業としては高め）', tone: 'good' },
            { label: '配当利回り', value: '約2.5〜3%（安定配当）', tone: 'mid' },
          ]}
          insights={[
            '景気敏感（シクリカル）銘柄の代表。世界景気の影響を受けやすい',
            '為替（円安）で輸出採算が改善 → 業績にプラス',
            'EVシフトと水素戦略の行方が長期テーマ',
            '株主還元（配当・自社株買い）に積極的になってきた',
          ]}
        />
      </Section>

      <Section title="🎮 例② 任天堂（7974）— エンタメ王国">
        <CompanyCard
          name="任天堂"
          code="7974"
          sector="一般消費財・ゲーム"
          businessModel="ゲーム機（Nintendo Switch）とソフト、IPライセンス、テーマパーク（USJ Super Nintendo World）など。マリオ、ゼルダ等の強力IPを保有。"
          checkpoint={[
            { label: 'PER', value: '約15〜25倍（ヒット作のサイクルで変動）', tone: 'mid' },
            { label: 'PBR', value: '約3〜5倍（IPの価値が高く評価）', tone: 'mid' },
            { label: 'ROE', value: '約15〜20%（高水準）', tone: 'good' },
            { label: '配当利回り', value: '約2〜3%（業績連動配当）', tone: 'mid' },
          ]}
          insights={[
            '新ハードのリリースサイクル（5-7年）で業績が大きく変動',
            'IP（マリオ、ポケモン、ゼルダ）の価値は半永久的',
            '映画・テーマパーク等、ゲーム以外への展開も拡大中',
            '現預金が極めて潤沢で財務超健全',
          ]}
        />
      </Section>

      <Section title="🏦 例③ 三菱UFJフィナンシャル・グループ（8306）— 高配当・バリュー株代表">
        <CompanyCard
          name="三菱UFJ FG"
          code="8306"
          sector="金融"
          businessModel="日本最大の銀行グループ。銀行・信託・証券・カード・リース・米国モルガン・スタンレーへの出資など多角的。"
          checkpoint={[
            { label: 'PER', value: '約12〜17倍（金利上昇期待で再評価）', tone: 'mid' },
            { label: 'PBR', value: '約1.0〜1.5倍（PBR1倍割れから脱却）', tone: 'mid' },
            { label: 'ROE', value: '約9〜10%（収益力改善）', tone: 'mid' },
            { label: '配当利回り', value: '約2.5〜3.5%（増配傾向）', tone: 'good' },
          ]}
          insights={[
            '日銀の金融政策（金利動向）の影響を強く受ける',
            '金利上昇局面では「貸出金利↑」で利益が伸びやすい',
            '高配当でインカム狙いの長期投資家に人気',
            'かつてPBR1倍割れの代表格 → 株価上昇でバリュー卒業中。今は「収益力改善で見直されている銘柄」の典型例',
          ]}
        />
      </Section>

      <Section title="💡 日本株を選ぶ視点">
        <ul>
          <li><strong>業種多様性</strong>を意識：自動車・電機・銀行・通信・小売など、偏らない</li>
          <li><strong>PBR1倍割れ</strong>は「割安」だが、なぜ安いか（成長性？ガバナンス？）を要確認</li>
          <li><strong>株主優待</strong>は日本独特の魅力。生活で使える優待は実質利回りを押し上げる</li>
          <li><strong>政策の影響</strong>を読む：東証のPBR1倍改善要請、新NISA、日銀政策など</li>
        </ul>
      </Section>

      <Section title="⚠️ 日本株のクセ">
        <div className="card p-4 bg-amber-50/40 border-amber-100">
          <ul className="text-sm space-y-1.5">
            <li>📦 <strong>100株単位</strong>での売買が基本（数万円〜数十万円必要）</li>
            <li>📊 <strong>外国人投資家</strong>の売買が日経平均を大きく左右する</li>
            <li>💱 <strong>円安/円高</strong>で輸出企業/輸入企業が逆方向に動く</li>
            <li>🎁 株主優待や配当の権利確定日に向けた値動きあり</li>
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

function StatCard({ label, value, desc }: { label: string; value: string; desc: string }) {
  return (
    <div className="card p-3 text-center">
      <div className="text-[10px] text-slate-500">{label}</div>
      <div className="font-bold text-navy-900 text-sm mt-0.5">{value}</div>
      <div className="text-[10px] text-slate-500 mt-0.5">{desc}</div>
    </div>
  );
}

function CompanyCard({
  name,
  code,
  sector,
  businessModel,
  checkpoint,
  insights,
}: {
  name: string;
  code: string;
  sector: string;
  businessModel: string;
  checkpoint: { label: string; value: string; tone: 'low' | 'mid' | 'good' }[];
  insights: string[];
}) {
  const toneColor = {
    low: 'text-emerald-700',
    mid: 'text-navy-800',
    good: 'text-amber-700',
  };
  return (
    <div className="card p-5 space-y-4">
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="text-xl font-bold text-navy-900">{name}</span>
        <span className="chip font-mono">{code}</span>
        <span className="text-xs text-slate-500">{sector}</span>
      </div>
      <div>
        <div className="text-[11px] font-semibold text-slate-500">ビジネスモデル</div>
        <p className="text-sm text-slate-700 mt-1 leading-relaxed">{businessModel}</p>
      </div>
      <div>
        <div className="text-[11px] font-semibold text-slate-500 mb-1.5">主要指標の見方（例示）</div>
        <div className="grid grid-cols-2 gap-2">
          {checkpoint.map((c) => (
            <div key={c.label} className="rounded-lg bg-slate-50 px-3 py-2">
              <div className="text-[10px] text-slate-500">{c.label}</div>
              <div className={`text-xs font-semibold ${toneColor[c.tone]}`}>{c.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="text-[11px] font-semibold text-slate-500 mb-1.5">この銘柄を見るときのポイント</div>
        <ul className="text-sm space-y-1 text-slate-700">
          {insights.map((i, n) => (
            <li key={n} className="flex gap-2">
              <span>•</span>
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-[10px] text-slate-400">
        ※ 指標値は時期により変動します。実際の数値は最新の決算情報・株価で確認してください。投資判断はご自身の責任で。
      </div>
    </div>
  );
}
