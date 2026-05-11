import { LessonShell } from '../../components/LessonShell';
import { CompoundSimulator } from '../../components/interactives/CompoundSimulator';

export function Ch1Lesson4() {
  return (
    <LessonShell lessonId="ch1-l4">
      <Section title="💸 投資の利益にはなぜ税金がかかる？">
        <p>
          普通、株で利益が出ると <strong>約 20.315%</strong> の税金がかかります（所得税15% + 住民税5% + 復興特別所得税0.315%）。
          つまり10万円の利益が出ても、手元に残るのは <strong>約8万円弱</strong>。
        </p>
        <p>
          これを <strong>合法的にゼロにできる</strong> 制度が国によって用意されています。それが <strong>NISA</strong> と <strong>iDeCo</strong> です。
          使わない手はありません。
        </p>
      </Section>

      <Section title="🇯🇵 新NISA（2024年〜）— 投資の必須インフラ">
        <p>
          2024年から大幅にパワーアップした新しい NISA は、<strong>利益が全額非課税</strong> になる制度です。
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[520px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100"></th>
                <th className="text-left p-2.5 border border-navy-100">つみたて投資枠</th>
                <th className="text-left p-2.5 border border-navy-100">成長投資枠</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="p-2.5 border border-slate-200 font-semibold">年間枠</td>
                <td className="p-2.5 border border-slate-200">120万円</td>
                <td className="p-2.5 border border-slate-200">240万円</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-2.5 border border-slate-200 font-semibold">合計枠（生涯）</td>
                <td className="p-2.5 border border-slate-200 text-accent-dark font-bold" colSpan={2}>1,800万円（うち成長枠は1,200万円まで）</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-slate-200 font-semibold">対象商品</td>
                <td className="p-2.5 border border-slate-200">金融庁が認めた長期向け投信</td>
                <td className="p-2.5 border border-slate-200">個別株・投信・ETF など幅広い</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="p-2.5 border border-slate-200 font-semibold">非課税期間</td>
                <td className="p-2.5 border border-slate-200 text-accent-dark font-bold" colSpan={2}>無期限（恒久化）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900 mt-3">
          ⭐ <strong>初心者の鉄板戦略</strong>：まず「つみたて投資枠」で全世界株 or S&P500 のインデックス投信を月3〜5万円で積み立てる。
          慣れてきたら「成長投資枠」で個別株やETFに広げる。
        </p>
      </Section>

      <Section title="🏛️ iDeCo — 老後資金を作る最強税制">
        <p>
          iDeCo（個人型確定拠出年金）は、<strong>老後資金を作るための</strong> 私的年金制度。NISAとの違いは：
        </p>
        <ul>
          <li>✅ 掛金が <strong>全額所得控除</strong>（毎年の所得税・住民税が減る！）</li>
          <li>✅ 運用益が <strong>非課税</strong></li>
          <li>⚠️ ただし <strong>60歳まで引き出せない</strong>（老後資金専用なので）</li>
        </ul>
        <p>
          つまり、現役世代の節税効果と老後資金作りを両立できる仕組み。一方で <strong>流動性が低い</strong>（引き出せない）ので、教育費や住宅資金には使えません。
        </p>

        <h3 className="text-lg mt-4 mb-2">📊 NISA vs iDeCo の使い分け</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card p-4 bg-blue-50/50 border-blue-100">
            <div className="font-bold text-navy-900 mb-1">NISA を優先する人</div>
            <ul className="text-sm space-y-1">
              <li>・自由に引き出したい人</li>
              <li>・若くてライフイベントが多い人</li>
              <li>・年収が低めで所得控除の恩恵が小さい人</li>
            </ul>
          </div>
          <div className="card p-4 bg-emerald-50/50 border-emerald-100">
            <div className="font-bold text-navy-900 mb-1">iDeCo も活用したい人</div>
            <ul className="text-sm space-y-1">
              <li>・老後資金を確実に作りたい人</li>
              <li>・所得が高く節税メリットが大きい人</li>
              <li>・浪費癖があり「引き出せない」ことが利点になる人</li>
            </ul>
          </div>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg mt-3">
          💡 多くの人は <strong>「NISAを満額埋めてから、余力があれば iDeCo」</strong> の順番で考えると失敗が少ないです。
        </p>
      </Section>

      <Section title="🧮 複利の威力をシミュレーターで実感">
        <p>
          NISA や iDeCo の本当の威力は、<strong>長期 × 複利</strong> で発揮されます。
          下のシミュレーターで、毎月の積立額と運用年数を変えて遊んでみましょう。
          <strong>「20年以上」</strong> の領域に入ると、グラフがぐっと跳ね上がるのが見えるはずです。
        </p>
      </Section>

      <CompoundSimulator />

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 通常は利益に約20%の税金がかかるが、NISA / iDeCo なら非課税</li>
            <li>✅ 新NISA は生涯1,800万円の非課税枠、期間無制限</li>
            <li>✅ iDeCo は掛金が所得控除になる強力な節税効果アリ（ただし60歳まで引き出せない）</li>
            <li>✅ 複利の力は20年以降に跳ね上がる — だから「早く始める」が最強の戦略</li>
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
