import { LessonShell } from '../../components/LessonShell';

export function Ch5Lesson4() {
  return (
    <LessonShell lessonId="ch5-l4">
      <Section title="📊 2つの大きなアプローチ">
        <p>
          投資信託・ETFには大きく <strong>2つのスタイル</strong> があります。どちらを選ぶかは、投資の根本的な哲学に関わります。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card p-4 bg-emerald-50/40 border-emerald-100">
            <div className="font-bold text-emerald-900">📊 インデックス（パッシブ）運用</div>
            <p className="text-sm text-emerald-900/80 mt-1 leading-relaxed">
              <strong>市場平均</strong> に連動することを目指す。例：S&P500、TOPIX、全世界株。
            </p>
            <ul className="text-xs text-emerald-900/70 mt-2 space-y-1">
              <li>・コスト激安（信託報酬0.1%前後）</li>
              <li>・「市場平均」を取りに行くシンプル戦略</li>
              <li>・銘柄選びも売買判断も最小限</li>
            </ul>
          </div>
          <div className="card p-4 bg-amber-50/40 border-amber-100">
            <div className="font-bold text-amber-900">🎯 アクティブ運用</div>
            <p className="text-sm text-amber-900/80 mt-1 leading-relaxed">
              <strong>市場平均超え</strong> を狙う。プロのファンドマネージャーが銘柄を厳選。
            </p>
            <ul className="text-xs text-amber-900/70 mt-2 space-y-1">
              <li>・コストが高め（信託報酬1〜2%）</li>
              <li>・うまく行けば市場以上のリターン</li>
              <li>・銘柄選びの労力（人件費）が反映される</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="📈 衝撃のデータ — 過半数のアクティブは負ける">
        <p>
          米SPIVA の長年の調査によると：
        </p>
        <div className="card p-5 bg-rose-50/40 border-rose-100">
          <div className="text-base font-bold text-rose-900 leading-relaxed">
            「米国の大型株アクティブファンドの <strong className="text-rose-700 text-xl">90%以上</strong> が、
            15年間でS&P500に負けている」
          </div>
          <div className="text-xs text-rose-800 mt-2">出典：SPIVA U.S. Scorecard 2024年末時点</div>
        </div>
        <p>
          理由はシンプル：<strong>高いコスト（信託報酬・売買コスト）が勝ち分を食い潰す</strong> から。
          仮にアクティブが市場と同じパフォーマンスを出しても、コストの差だけインデックスに負けてしまうのです。
        </p>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 もちろん「勝つアクティブ」もあります。ただし <strong>事前にそれを見抜くのはほぼ不可能</strong> というのが現実。
        </p>
      </Section>

      <Section title="🤔 どちらを選ぶ？シンプルな答え">
        <div className="card p-5 bg-emerald-50/40 border-emerald-100">
          <div className="font-bold text-emerald-900 mb-1">🎯 初心者・大多数の人</div>
          <p className="text-sm text-emerald-900/80 leading-relaxed">
            <strong>インデックス投資</strong> をコア（中核）に据える。
            全世界株 or S&P500 のインデックスファンドを長期積立。
            これが現代の投資の <strong>「鉄板の答え」</strong>。
          </p>
        </div>
        <div className="card p-5 bg-amber-50/40 border-amber-100 mt-3">
          <div className="font-bold text-amber-900 mb-1">🎯 上級者・特定の哲学がある人</div>
          <p className="text-sm text-amber-900/80 leading-relaxed">
            <strong>「コア・サテライト戦略」</strong>：資金の70-80%はインデックス、残り20-30%をアクティブや個別株で「自分の信じる銘柄」に賭ける。
            これなら大ハズレはせず、自分の投資哲学を反映できる。
          </p>
        </div>
      </Section>

      <Section title="🏆 王道のインデックスファンド（日本で買えるもの）">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">ファンド名</th>
                <th className="text-left p-2.5 border border-navy-100">連動先</th>
                <th className="text-left p-2.5 border border-navy-100">信託報酬</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">eMAXIS Slim 全世界株式（オール・カントリー）</td><td className="p-2.5 border border-slate-200">MSCI ACWI</td><td className="p-2.5 border border-slate-200">0.0577%</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">eMAXIS Slim 米国株式（S&P500）</td><td className="p-2.5 border border-slate-200">S&P500</td><td className="p-2.5 border border-slate-200">0.09372%</td></tr>
              <tr><td className="p-2.5 border border-slate-200">SBI・V・S&P500</td><td className="p-2.5 border border-slate-200">S&P500</td><td className="p-2.5 border border-slate-200">0.0938%</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">楽天・全世界株式</td><td className="p-2.5 border border-slate-200">FTSE Global All Cap</td><td className="p-2.5 border border-slate-200">0.179%（実質0.178%）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-slate-500 mt-2">
          ※ 信託報酬は時期により変動します。最新値は各証券会社の商品ページで確認を。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ インデックスは市場平均連動、低コスト。アクティブは市場超え狙い、高コスト</li>
            <li>✅ 米国の長期データでは、アクティブの大多数（約85%）がインデックスに負ける</li>
            <li>✅ 初心者は「インデックス積立」が現代の鉄板の答え</li>
            <li>✅ 上級者は「コア・サテライト戦略」で哲学を反映するのもアリ</li>
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
