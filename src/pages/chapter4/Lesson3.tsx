import { LessonShell } from '../../components/LessonShell';

export function Ch4Lesson3() {
  return (
    <LessonShell lessonId="ch4-l3">
      <Section title="🛤️ トレンドは3種類しかない">
        <p>
          複雑に見えるチャートも、ズームアウトすると <strong>3種類のトレンド</strong> のどれかに分類されます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <TrendCard
            emoji="📈"
            name="上昇トレンド"
            desc="高値・安値が共に切り上がっていく"
            tactic="押し目買い、トレンドフォロー"
          />
          <TrendCard
            emoji="📉"
            name="下降トレンド"
            desc="高値・安値が共に切り下がっていく"
            tactic="戻り売り、空売り、買いは控える"
          />
          <TrendCard
            emoji="↔️"
            name="横ばい（レンジ）"
            desc="一定の幅で行ったり来たり"
            tactic="サポートで買い、レジスタンスで売り"
          />
        </div>
        <p className="text-sm bg-slate-50 p-3 rounded-lg">
          💡 投資の格言で <strong>「Trend is your friend（トレンドは友達）」</strong>。
          トレンドに逆らうより、流れに乗るほうが格段に勝率が上がります。
        </p>
      </Section>

      <Section title="🧱 サポートとレジスタンス">
        <p>
          チャート上の <strong>「跳ね返されやすい価格帯」</strong> を、サポート（支持線・下支え）／レジスタンス（抵抗線・上値の壁）と呼びます。
        </p>
        <div className="card p-4 bg-slate-50/50">
          <div className="font-semibold mb-2 text-sm">どうやって引く？</div>
          <ul className="text-sm space-y-1.5">
            <li>📌 過去に <strong>何度も反発した価格</strong> を水平線で結ぶ</li>
            <li>📌 上昇トレンド中の安値を結べば <strong>トレンドラインがサポート</strong> に</li>
            <li>📌 心理的な節目（10,000円、1,000ドルなど切りのいい数字）も意識される</li>
          </ul>
        </div>
        <p>
          サポートを <strong>下抜けると</strong>、それが今度は上値のレジスタンスに変わります（役割転換）。
          同様に、レジスタンスを上抜けると、それは新しいサポートに。<strong>「これまでの天井が、新しい床になる」</strong> 現象です。
        </p>
      </Section>

      <Section title="🎨 代表的な「形」3つ">
        <h3 className="text-lg mt-4 mb-2">① ダブルトップ／ダブルボトム — 二度の挑戦</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <PatternBox
            label="ダブルトップ"
            color="rose"
            desc="2回同じ高値で跳ね返される → 天井形成のサイン"
            sketch="∩∩"
          />
          <PatternBox
            label="ダブルボトム"
            color="emerald"
            desc="2回同じ安値で跳ね返される → 底打ちのサイン"
            sketch="∪∪"
          />
        </div>

        <h3 className="text-lg mt-6 mb-2">② 三尊／逆三尊（ヘッド・アンド・ショルダーズ）</h3>
        <p className="text-sm">
          肩・頭・肩の形（∩∩∩で真ん中が高い）が出ると、強い <strong>トレンド転換</strong> のサインとして有名。
          特に下落トレンドへの転換時に注目されます。
        </p>

        <h3 className="text-lg mt-6 mb-2">③ 三角保ち合い（ペナント／フラッグ）</h3>
        <p className="text-sm">
          高値と安値の幅がだんだん狭くなっていき、最後にどちらかにブレイクするパターン。
          <strong>「ブレイクした方向」</strong> に大きく動くことが多いとされる。
        </p>
      </Section>

      <Section title="⚠️ パターン分析の限界">
        <p>
          「パターンが出たら必ず動く」 ── ではありません。
        </p>
        <ul>
          <li>📊 同じパターンでも <strong>勝率は60%程度</strong>（外れることも多い）</li>
          <li>🎭 <strong>「だまし」</strong> でブレイクして元に戻ることもしばしば</li>
          <li>🧠 自分の見たい形を <strong>無意識にチャートに当てはめてしまう</strong> 認知バイアスに注意</li>
        </ul>
        <p>
          チャートパターンは <strong>「絶対のサイン」ではなく「ヒント」</strong> と捉え、
          ファンダメンタルズと組み合わせて判断するのが堅実です。
        </p>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ トレンドは3つ：上昇・下降・横ばい</li>
            <li>✅ サポート/レジスタンス線は「過去に何度も反発した価格」で引く</li>
            <li>✅ ダブルトップ/ボトム、三尊、三角保ち合いは頻出パターン</li>
            <li>✅ パターンは「ヒント」であって「確実な予言」ではない</li>
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

function TrendCard({ emoji, name, desc, tactic }: { emoji: string; name: string; desc: string; tactic: string }) {
  return (
    <div className="card p-4">
      <div className="text-2xl mb-1">{emoji}</div>
      <div className="font-bold text-navy-900">{name}</div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
      <div className="text-[10px] text-slate-500 mt-2">戦術: {tactic}</div>
    </div>
  );
}

function PatternBox({ label, desc, sketch, color }: { label: string; desc: string; sketch: string; color: 'rose' | 'emerald' }) {
  const bg = color === 'rose' ? 'bg-rose-50/50 border-rose-100' : 'bg-emerald-50/50 border-emerald-100';
  return (
    <div className={`card p-4 ${bg}`}>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold text-navy-700 font-mono">{sketch}</span>
        <span className="font-bold text-navy-900">{label}</span>
      </div>
      <p className="text-xs text-slate-700 mt-2 leading-relaxed">{desc}</p>
    </div>
  );
}
