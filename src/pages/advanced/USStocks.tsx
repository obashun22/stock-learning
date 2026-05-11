import { LessonShell } from '../../components/LessonShell';

export function USStocks() {
  return (
    <LessonShell lessonId="adv-us">
      <Section title="🇺🇸 米国株市場の特徴">
        <p>
          世界最大の株式市場である米国。時価総額・流動性・銘柄数・成長性のすべてで圧倒的なスケールを誇ります。
          日本からもネット証券で気軽に投資できる時代になっています。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat label="時価総額" value="世界の約60%" />
          <Stat label="主要指数" value="S&P500, NASDAQ, ダウ" />
          <Stat label="売買単位" value="1株から" />
          <Stat label="長期リターン" value="年率約9〜10%" />
        </div>
        <p className="text-sm bg-emerald-50 border border-emerald-200 p-3 rounded-lg text-emerald-900">
          ✨ 米国株は <strong>1株から買える</strong>。AAPL（Apple）なら3万円程度で1株オーナーに。
          少額から世界トップ企業の株主になれるのは魅力。
        </p>
      </Section>

      <Section title="🍎 例① Apple（AAPL）— 時価総額世界トップ常連">
        <CompanyCard
          name="Apple Inc."
          ticker="AAPL"
          sector="情報技術"
          businessModel="iPhoneを軸に、Mac、iPad、Apple Watch、AirPods、サブスク（iCloud、Apple Music等）、App Store手数料が利益源。製品 + サービスの両輪。"
          checkpoint={[
            { label: 'PER', value: '約25〜35倍（テック大手として標準）', tone: 'mid' },
            { label: 'PBR', value: '極めて高い（自社株買いで自己資本が小さい）', tone: 'mid' },
            { label: 'ROE', value: '驚異の100%超（自社株買いで分母を圧縮）', tone: 'good' },
            { label: '配当利回り', value: '約0.5%（低配当・自社株買い中心の還元）', tone: 'mid' },
          ]}
          insights={[
            '巨額の自社株買いで「1株あたり利益」を上げる戦略',
            'サービス事業（粗利益率約70%）が将来の柱に',
            '中国市場の動向が業績に直結',
            '為替（円高）にはネガティブ。日本人が買う時は要意識',
          ]}
        />
      </Section>

      <Section title="💻 例② Microsoft（MSFT）— クラウドの王者">
        <CompanyCard
          name="Microsoft"
          ticker="MSFT"
          sector="情報技術"
          businessModel="Windows・Officeに加え、クラウドのAzure（世界2位）、LinkedIn、GitHub、Xboxなどを展開。生成AIのOpenAIに大型投資し、リーダーの一角。"
          checkpoint={[
            { label: 'PER', value: '約30〜35倍（高成長プレミアム）', tone: 'mid' },
            { label: 'PBR', value: '約10倍（高ROEを反映）', tone: 'mid' },
            { label: 'ROE', value: '約35〜45%（米国大型株でも上位）', tone: 'good' },
            { label: '配当利回り', value: '約0.7%（増配を続ける高品質株）', tone: 'mid' },
          ]}
          insights={[
            'Azure の成長率が株価ドライバー',
            '法人向け中心で景気の影響を受けにくいビジネス',
            'AI投資のリターンが今後の評価ポイント',
            '配当 + 自社株買いの「総株主還元」は安定的',
          ]}
        />
      </Section>

      <Section title="📊 例③ S&P500 ETF（VOO）— インデックス投資の王道">
        <CompanyCard
          name="Vanguard S&P 500 ETF"
          ticker="VOO"
          sector="ETF（インデックス）"
          businessModel="米国大型株500社に連動するETF。Apple、Microsoft、NVIDIA、Amazon、Googleなど。1本買えば米国の主要500社のオーナーに。"
          checkpoint={[
            { label: '経費率', value: '0.03%（極めて低コスト）', tone: 'good' },
            { label: '配当利回り', value: '約1.3〜1.5%（年4回分配）', tone: 'mid' },
            { label: '過去20年リターン', value: '年率約9〜10%（配当込み）', tone: 'good' },
            { label: '最大ドローダウン', value: '約-50%（リーマンショック時）', tone: 'mid' },
          ]}
          insights={[
            '個別銘柄分析が不要。手間ゼロで米国経済全体に投資',
            '同等のETFに iShares Core S&P 500（IVV）、SPDR S&P 500（SPY）がある',
            '日本の投信「eMAXIS Slim 米国株式（S&P500）」は同じ指数連動で、日本円で買える点が便利',
            '長期前提なら短期の暴落は気にせず積立を継続',
          ]}
        />
      </Section>

      <Section title="🌐 例④ 全世界株 ETF（VT）— 究極の分散">
        <CompanyCard
          name="Vanguard Total World Stock ETF"
          ticker="VT"
          sector="ETF（全世界）"
          businessModel="世界中の約9,000銘柄に分散。米国約60% + 先進国（日本、欧州等）30% + 新興国10%程度。"
          checkpoint={[
            { label: '経費率', value: '0.06%', tone: 'good' },
            { label: '配当利回り', value: '約2%', tone: 'mid' },
            { label: '銘柄数', value: '約9,000銘柄', tone: 'good' },
            { label: 'リバランス', value: '不要（時価総額加重で自動調整）', tone: 'good' },
          ]}
          insights={[
            '「米国が今後も勝者かどうか分からない」と思う人向け',
            '将来の経済勢力図の変化にも自動で追随する',
            '日本でも「eMAXIS Slim 全世界株式（オール・カントリー）」が同等',
            '「何を買うか迷う」を解決する究極の答え',
          ]}
        />
      </Section>

      <Section title="⚠️ 米国株投資の注意点">
        <div className="card p-4 bg-amber-50/40 border-amber-100">
          <ul className="text-sm space-y-1.5">
            <li>💱 <strong>為替リスク</strong>：円安で評価額↑、円高で評価額↓</li>
            <li>💵 <strong>配当に米国税10%</strong>：配当時に米国側で10%源泉徴収。確定申告で外国税額控除を申請すれば一部還付可能（NISAでは控除不可）</li>
            <li>⏰ <strong>取引時間</strong>：米国市場は日本時間 23:30〜翌6:00（夏時間は22:30〜5:00）</li>
            <li>📋 <strong>確定申告</strong>：特定口座でも、外国税額控除を受けるには申告が必要なケースあり</li>
          </ul>
        </div>
      </Section>

      <Section title="🇺🇸 vs 🇯🇵 日本株との違いまとめ">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100"></th>
                <th className="text-left p-2.5 border border-navy-100">日本株</th>
                <th className="text-left p-2.5 border border-navy-100">米国株</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200 font-semibold">売買単位</td><td className="p-2.5 border border-slate-200">100株単位</td><td className="p-2.5 border border-slate-200">1株から</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">配当頻度</td><td className="p-2.5 border border-slate-200">年1〜2回</td><td className="p-2.5 border border-slate-200">年4回が主流</td></tr>
              <tr><td className="p-2.5 border border-slate-200 font-semibold">ROE平均</td><td className="p-2.5 border border-slate-200">約8〜9%</td><td className="p-2.5 border border-slate-200">約15%</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">株主還元</td><td className="p-2.5 border border-slate-200">配当・優待</td><td className="p-2.5 border border-slate-200">配当・自社株買い（株主優待は基本なし）</td></tr>
              <tr><td className="p-2.5 border border-slate-200 font-semibold">手数料</td><td className="p-2.5 border border-slate-200">ほぼ無料化</td><td className="p-2.5 border border-slate-200">約定代金の0.45%等</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200 font-semibold">税</td><td className="p-2.5 border border-slate-200">約20.315%</td><td className="p-2.5 border border-slate-200">配当に米国10% + 日本20.315%（控除申請可）</td></tr>
            </tbody>
          </table>
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-3 text-center">
      <div className="text-[10px] text-slate-500">{label}</div>
      <div className="font-bold text-navy-900 text-sm mt-0.5">{value}</div>
    </div>
  );
}

function CompanyCard({
  name,
  ticker,
  sector,
  businessModel,
  checkpoint,
  insights,
}: {
  name: string;
  ticker: string;
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
        <span className="chip font-mono">${ticker}</span>
        <span className="text-xs text-slate-500">{sector}</span>
      </div>
      <div>
        <div className="text-[11px] font-semibold text-slate-500">ビジネスモデル</div>
        <p className="text-sm text-slate-700 mt-1 leading-relaxed">{businessModel}</p>
      </div>
      <div>
        <div className="text-[11px] font-semibold text-slate-500 mb-1.5">主要指標（例示）</div>
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
            <li key={n} className="flex gap-2"><span>•</span><span>{i}</span></li>
          ))}
        </ul>
      </div>
      <div className="text-[10px] text-slate-400">
        ※ 指標値は時期により変動します。実際の数値は最新の決算情報・株価で確認してください。投資判断はご自身の責任で。
      </div>
    </div>
  );
}
