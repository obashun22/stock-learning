import { Link } from 'react-router-dom';
import { chapters, allTrackableIds, allLessons } from '../lib/curriculum';
import { useProgress, useOverallProgress } from '../lib/progress';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export function Home() {
  const { done, total, ratio } = useOverallProgress(allTrackableIds);
  const completed = useProgress((s) => s.completedLessons);
  const quizResults = useProgress((s) => s.quizResults);
  const lastVisited = useProgress((s) => s.lastVisited);

  return (
    <div className="container-page py-8 sm:py-12 space-y-10">
      {/* ヒーロー */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white px-6 py-10 sm:px-10 sm:py-14 shadow-soft">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs font-medium mb-4">
            <span>🧭</span> Kabu Compass
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
            株式投資を、<br className="sm:hidden" />
            <span className="text-amber-300">図とクイズ</span>で学ぶ。
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            「株って結局なに？」から「自分のポートフォリオの作り方」まで、
            <br className="hidden sm:block" />
            入門〜中級をステップで体系的にカバー。インタラクティブなシミュレーターと章末クイズで理解を確認できます。
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/intro/money-journey" className="btn-accent text-base">
              🧭 まずは「お金の旅」から
            </Link>
            {lastVisited && lastVisited !== '/' && (
              <Link to={lastVisited} className="btn-ghost bg-white/10 border-white/20 text-white hover:bg-white/20">
                前回の続きから →
              </Link>
            )}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
              <span>あなたの進捗</span>
              <span className="font-mono tabular-nums">
                {done} / {total} 完了
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/15 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${ratio * 100}%` }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-amber-300 to-amber-500"
              />
            </div>
          </div>
        </div>

        {/* 装飾 */}
        <div className="hidden md:block absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        <div className="hidden md:block absolute right-10 top-10 w-40 h-40 rounded-full bg-emerald-400/10 blur-2xl" aria-hidden />
      </section>

      {/* 特徴3点 */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <FeatureCard
          emoji="🗺️"
          title="ロードマップ"
          desc="全体像が一目でわかる。今どこにいるか迷わない。"
        />
        <FeatureCard
          emoji="🧪"
          title="6つのインタラクティブ"
          desc="複利・板・指標電卓・ローソク足・分散・ケース。手で動かして学ぶ。"
        />
        <FeatureCard
          emoji="📝"
          title="章末クイズ"
          desc="5問×6章。解説つき。間違えても何度でも再挑戦OK。"
        />
      </section>

      {/* ロードマップ */}
      <section>
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-xl sm:text-2xl">📚 学習ロードマップ</h2>
            <p className="text-sm text-slate-600 mt-1">
              上から順に進めると無理なく理解できます。気になる章から飛んでもOK。
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {chapters.map((chapter, ci) => {
            const lessonsDone = chapter.lessons.filter((l) => completed[l.id]).length;
            const quizDone = chapter.quiz && quizResults[chapter.quiz.id];
            const totalItems = chapter.lessons.length + (chapter.quiz ? 1 : 0);
            const doneItems = lessonsDone + (quizDone ? 1 : 0);
            const chapterRatio = totalItems ? doneItems / totalItems : 0;
            const fullyDone = doneItems === totalItems && totalItems > 0;
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.04 }}
                className={clsx(
                  'card p-4 sm:p-6',
                  fullyDone && 'border-success/40 bg-emerald-50/30',
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={clsx(
                      'shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl',
                      fullyDone ? 'bg-success/10' : 'bg-navy-50',
                    )}
                  >
                    {fullyDone ? '✅' : chapter.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                        {chapter.number === 'intro'
                          ? 'Intro'
                          : chapter.number === 'advanced'
                            ? 'Advanced'
                            : `Chapter ${chapter.number}`}
                      </span>
                      <span className="text-[11px] text-slate-400">·</span>
                      <span className="text-[11px] text-slate-500">{chapter.subtitle}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl mt-0.5">{chapter.title}</h3>

                    {/* レッスン一覧 */}
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {chapter.lessons.map((lesson) => {
                        const isDone = Boolean(completed[lesson.id]);
                        return (
                          <li key={lesson.id}>
                            <Link
                              to={lesson.path}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-sm transition"
                            >
                              <span
                                className={clsx(
                                  'inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] shrink-0',
                                  isDone
                                    ? 'bg-success text-white'
                                    : 'border border-slate-300 text-slate-400',
                                )}
                              >
                                {isDone ? '✓' : ''}
                              </span>
                              <span
                                className={clsx(
                                  'flex-1',
                                  isDone ? 'text-slate-500 line-through decoration-success/40' : 'text-slate-700',
                                )}
                              >
                                {lesson.title}
                              </span>
                              {lesson.hasInteractive && (
                                <span className="text-[10px] chip-accent">🧪</span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                      {chapter.quiz && (
                        <li>
                          <Link
                            to={chapter.quiz.path}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-amber-50 text-sm font-medium text-amber-800 transition"
                          >
                            <span
                              className={clsx(
                                'inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] shrink-0',
                                quizDone
                                  ? 'bg-success text-white'
                                  : 'border border-amber-300 text-amber-400',
                              )}
                            >
                              {quizDone ? '✓' : '?'}
                            </span>
                            <span className="flex-1">章末クイズ</span>
                            {quizDone && (
                              <span className="text-[10px] text-amber-700">
                                {quizDone.score}/{quizDone.total}
                              </span>
                            )}
                          </Link>
                        </li>
                      )}
                    </ul>

                    {/* 進捗バー */}
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={clsx(
                            'h-full rounded-full',
                            fullyDone ? 'bg-success' : 'bg-accent',
                          )}
                          style={{ width: `${chapterRatio * 100}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-slate-500 tabular-nums">
                        {doneItems}/{totalItems}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 最終アクション */}
      <section className="card p-6 text-center bg-gradient-to-br from-white to-amber-50/50">
        <div className="text-2xl mb-2">🚀 まずは1レッスンだけでも</div>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          完璧を目指す必要はありません。<strong>1日5分でも続けることが何より大事</strong>です。
          学んだら、少額（証券口座で月1,000円〜）で実践するとさらに定着します。
        </p>
        <div className="mt-4">
          <Link to={allLessons[0].path} className="btn-accent">
            最初のレッスンを始める →
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="card p-4 sm:p-5">
      <div className="text-2xl mb-1.5">{emoji}</div>
      <div className="font-bold text-navy-900">{title}</div>
      <div className="text-xs text-slate-600 leading-relaxed mt-1">{desc}</div>
    </div>
  );
}
