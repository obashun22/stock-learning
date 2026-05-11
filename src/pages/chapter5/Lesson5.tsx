import { LessonShell } from '../../components/LessonShell';

export function Ch5Lesson5() {
  return (
    <LessonShell lessonId="ch5-l5">
      <Section title="🧠 「最大の敵は自分自身」">
        <p>
          ファンダメンタル分析もテクニカル分析も学んだ。ポートフォリオも組んだ。あとは継続するだけ ── のはずなのに、
          多くの個人投資家が <strong>「分かっているのに、できない」</strong> 罠にハマります。
        </p>
        <p>
          原因は <strong>人間の脳が投資に向いていない</strong> こと。何百万年もの進化で身についた直感は、
          時に合理的な投資判断を裏切ります。これを理解すると、感情に振り回されにくくなります。
        </p>
      </Section>

      <Section title="🪤 投資で陥りやすい7つの認知バイアス">
        <BiasCard
          emoji="😖"
          name="① 損失回避バイアス"
          desc="「1万円失う痛み」は「1万円得る喜び」の約2倍と言われる。だから損切りができず、塩漬けに。"
          countermeasure="売買ルールを事前に決めて機械的に従う"
        />
        <BiasCard
          emoji="🪞"
          name="② 確証バイアス"
          desc="自分の保有銘柄に都合の良い情報ばかり集め、悪い情報を無視する。"
          countermeasure="「もしこの銘柄を持っていなかったら、今買うか？」と自問する"
        />
        <BiasCard
          emoji="🐑"
          name="③ ハーディング（群衆心理）"
          desc="「みんなが買ってる」「ニュースで話題」になると追いかけたくなる。高値掴みの王道。"
          countermeasure="人気銘柄ほど慎重に。逆張りの胆力を養う"
        />
        <BiasCard
          emoji="🎰"
          name="④ 「これだけ持ったから」（保有効果）"
          desc="同じ銘柄でも、自分が保有しているとなぜか「より価値がある」と感じてしまう。"
          countermeasure="ポジションを「ゼロ」と仮定して評価し直す"
        />
        <BiasCard
          emoji="🎯"
          name="⑤ アンカリング"
          desc="自分が買った価格を「基準」にしてしまい、客観的な評価ができない。「これは安いはず、買値より下だから」"
          countermeasure="買値を意識せず、今この瞬間の妥当価格を再評価する"
        />
        <BiasCard
          emoji="🤴"
          name="⑥ 自信過剰"
          desc="少し勝つと「自分は才能がある」と勘違い。ハイレバや集中投資に走り、結果として大損する。"
          countermeasure="勝因の半分は「運」だと心得る。継続して勝てるかで判断"
        />
        <BiasCard
          emoji="📰"
          name="⑦ 直近性バイアス"
          desc="直近の出来事を過剰に重視する。最近の暴落で「もう株は終わりだ」と全部売る、など。"
          countermeasure="長期チャートを見て、過去の暴落とその後の回復を確認する習慣を"
        />
      </Section>

      <Section title="🛡️ バイアスから自分を守る3つのルール">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <RuleCard
            num="1"
            title="ルールを事前に書く"
            desc="買う理由、売る条件、損切りライン、利確ラインを文字にする。感情的になった時の自分への「過去の自分からの手紙」"
          />
          <RuleCard
            num="2"
            title="自動化する"
            desc="積立は自動引落しに設定し、感情を介在させない。「やるかやらないか」を毎回考えるとサボる"
          />
          <RuleCard
            num="3"
            title="記録を残す"
            desc="売買の理由と結果を投資ノートに記録。同じミスを繰り返さないための最強の習慣"
          />
        </div>
      </Section>

      <Section title="📜 偉人たちの名言">
        <div className="space-y-2">
          <Quote who="ウォーレン・バフェット">
            「市場が悲観しているときに買い、楽観しているときに売れ」
          </Quote>
          <Quote who="ベンジャミン・グレアム">
            「投資家にとっての最大の敵は、自分自身であることが多い」
          </Quote>
          <Quote who="ジョン・ボーグル（インデックス投資の父）">
            「投資の秘訣は、退屈なことを長く続けること」
          </Quote>
          <Quote who="ピーター・リンチ">
            「市場のタイミングを当てようとして失われたお金は、市場の暴落で失われたお金より遥かに多い」
          </Quote>
        </div>
      </Section>

      <Section title="🎯 このレッスンの要点">
        <div className="card p-5 bg-navy-50/50 border-navy-100">
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>✅ 投資で勝てない最大の理由は、知識不足ではなく心理バイアス</li>
            <li>✅ 「損失回避」「確証バイアス」「ハーディング」など7つの代表的な罠を知る</li>
            <li>✅ ルール化・自動化・記録の3つでバイアスから自分を守る</li>
            <li>✅ 良いリターンの本質は「退屈なことを長く続ける」こと</li>
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

function BiasCard({ emoji, name, desc, countermeasure }: { emoji: string; name: string; desc: string; countermeasure: string }) {
  return (
    <div className="card p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl">{emoji}</span>
        <span className="font-bold text-navy-900">{name}</span>
      </div>
      <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
      <div className="text-xs text-emerald-700 mt-2 leading-relaxed">
        💊 <strong>対策：</strong>{countermeasure}
      </div>
    </div>
  );
}

function RuleCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="card p-4">
      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold mb-2">
        {num}
      </div>
      <div className="font-bold text-navy-900">{title}</div>
      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

function Quote({ who, children }: { who: string; children: React.ReactNode }) {
  return (
    <div className="card p-4 bg-slate-50/50 border-l-4 border-l-accent">
      <p className="text-sm text-slate-800 italic leading-relaxed">"{children}"</p>
      <div className="text-xs text-slate-500 mt-1">— {who}</div>
    </div>
  );
}
