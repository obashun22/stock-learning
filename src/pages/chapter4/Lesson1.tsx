import { LessonShell } from '../../components/LessonShell';
import { CandlePlayground } from '../../components/interactives/CandlePlayground';

export function Ch4Lesson1() {
  return (
    <LessonShell lessonId="ch4-l1">
      <Section title="🕯️ ローソク足とは？">
        <p>
          1本のローソク足の中には、その期間（日足なら1日）の <strong>4つの価格情報</strong> が詰まっています：
          始値（はじめね）・高値（たかね）・安値（やすね）・終値（おわりね）。略して <strong>OHLC</strong> と呼びます。
        </p>
        <p>
          18世紀の <strong>日本の米相場</strong> で生まれた表記法で、今では世界中のプロが使う標準形式です。
        </p>
      </Section>

      <Section title="🔍 形の見方">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="card p-4 bg-emerald-50/40 border-emerald-100">
            <div className="font-bold text-emerald-800 mb-2">🟢 陽線（ようせん）</div>
            <ul className="text-sm space-y-1 text-emerald-900">
              <li>・終値 ＞ 始値（その日値上がりで終わった）</li>
              <li>・本体は緑 or 白で塗られる</li>
              <li>・大陽線 = 強い買い圧力</li>
            </ul>
          </div>
          <div className="card p-4 bg-rose-50/40 border-rose-100">
            <div className="font-bold text-rose-800 mb-2">🔴 陰線（いんせん）</div>
            <ul className="text-sm space-y-1 text-rose-900">
              <li>・終値 ＜ 始値（その日値下がりで終わった）</li>
              <li>・本体は赤 or 黒で塗られる</li>
              <li>・大陰線 = 強い売り圧力</li>
            </ul>
          </div>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 <strong>ヒゲの意味も重要</strong>。
          上ヒゲが長い＝高値で買われたが売り戻された／下ヒゲが長い＝下げたが買い戻された、というストーリーが読めます。
        </p>
      </Section>

      <Section title="📚 覚えておきたい代表的な6つのパターン">
        <p>
          ローソク足には数十種類のパターン名がありますが、まずは <strong>頻出の6つ</strong> を押さえれば充分。
          下のプレイグラウンドで実際に動かしてみてください。
        </p>
      </Section>

      <CandlePlayground />

      <Section title="📅 「足」の期間の使い分け">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[420px]">
            <thead className="bg-navy-50 text-navy-900">
              <tr>
                <th className="text-left p-2.5 border border-navy-100">名称</th>
                <th className="text-left p-2.5 border border-navy-100">1本の期間</th>
                <th className="text-left p-2.5 border border-navy-100">向いている目線</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr><td className="p-2.5 border border-slate-200">分足（1分・5分）</td><td className="p-2.5 border border-slate-200">分単位</td><td className="p-2.5 border border-slate-200">デイトレード</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">時間足</td><td className="p-2.5 border border-slate-200">1時間</td><td className="p-2.5 border border-slate-200">スイングトレード</td></tr>
              <tr><td className="p-2.5 border border-slate-200">日足</td><td className="p-2.5 border border-slate-200">1日</td><td className="p-2.5 border border-slate-200">短期〜中期投資（最も標準）</td></tr>
              <tr className="bg-slate-50/50"><td className="p-2.5 border border-slate-200">週足</td><td className="p-2.5 border border-slate-200">1週間</td><td className="p-2.5 border border-slate-200">中長期投資</td></tr>
              <tr><td className="p-2.5 border border-slate-200">月足</td><td className="p-2.5 border border-slate-200">1ヶ月</td><td className="p-2.5 border border-slate-200">超長期視点</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 長期投資なら <strong>週足・月足</strong> を主軸に、節目で日足を確認、というのが定番です。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 1本のローソク足 = OHLC（始値・高値・安値・終値）の4情報</li>
            <li>✅ 陽線（緑）= 値上がりで終了、陰線（赤）= 値下がりで終了</li>
            <li>✅ 実体の長さは「勢い」、ヒゲは「拒絶された方向」を示す</li>
            <li>✅ 期間（日足・週足等）で見える景色が変わる</li>
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
