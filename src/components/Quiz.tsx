import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useProgress, useOverallProgress } from '../lib/progress';
import { allTrackableIds, getNextLesson, allLessons } from '../lib/curriculum';
import { Confetti } from './Confetti';

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number; // index of correct
  explanation: string;
};

type Props = {
  quizId: string;
  title: string;
  questions: QuizQuestion[];
  chapterTitle: string;
  // クイズ完了後の「次へ」の遷移先（章末なので次の章の最初のレッスン）。未指定ならホーム
  nextHref?: string;
  nextLabel?: string;
};

export function Quiz({ quizId, title, questions, chapterTitle, nextHref, nextLabel }: Props) {
  const [answers, setAnswers] = useState<number[]>(() => new Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const recordQuiz = useProgress((s) => s.recordQuiz);
  const { done: doneCount, total } = useOverallProgress(allTrackableIds);
  const [showFinale, setShowFinale] = useState(false);

  const score = answers.filter((a, i) => a === questions[i].answer).length;
  const passed = score / questions.length >= 0.6; // 6割で合格

  const submit = () => {
    setSubmitted(true);
    recordQuiz(quizId, score, questions.length);
    // 全体進捗のチェック
    if (doneCount + 1 >= total) {
      setShowFinale(true);
    }
  };

  const retry = () => {
    setAnswers(new Array(questions.length).fill(-1));
    setSubmitted(false);
  };

  return (
    <article className="container-page py-6 sm:py-10 space-y-6">
      <Confetti active={showFinale} />

      <nav className="text-xs text-slate-500 flex items-center gap-1.5">
        <Link to="/" className="hover:text-navy-700">ホーム</Link>
        <span>›</span>
        <span>{chapterTitle}</span>
        <span>›</span>
        <span className="text-navy-700 font-medium">章末クイズ</span>
      </nav>

      <header className="space-y-2">
        <div className="chip-accent">📝 確認テスト</div>
        <h1 className="text-2xl sm:text-3xl">{title}</h1>
        <p className="text-slate-600 text-sm">
          全{questions.length}問。6割以上正解で合格です。間違えた問題は解説を読んで復習しましょう。
        </p>
      </header>

      <div className="space-y-4">
        {questions.map((q, qi) => {
          const userAns = answers[qi];
          const correct = q.answer;
          return (
            <div key={qi} className="card p-5 sm:p-6">
              <div className="flex items-start gap-2 mb-3">
                <span className="shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-navy-700 text-white text-xs font-bold">
                  Q{qi + 1}
                </span>
                <div className="font-semibold text-navy-900 leading-relaxed">{q.q}</div>
              </div>
              <div className="space-y-2 mt-3">
                {q.options.map((opt, oi) => {
                  const isUser = userAns === oi;
                  const isCorrect = correct === oi;
                  const showState = submitted;
                  return (
                    <label
                      key={oi}
                      className={clsx(
                        'flex items-start gap-3 px-3 py-2.5 rounded-xl border cursor-pointer transition text-sm',
                        !showState && isUser && 'border-navy-400 bg-navy-50',
                        !showState && !isUser && 'border-slate-200 hover:bg-slate-50',
                        showState && isCorrect && 'border-success bg-emerald-50',
                        showState && !isCorrect && isUser && 'border-danger bg-rose-50',
                        showState && !isCorrect && !isUser && 'border-slate-200 opacity-60',
                      )}
                    >
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        className="mt-0.5"
                        checked={isUser}
                        disabled={submitted}
                        onChange={() => {
                          const next = [...answers];
                          next[qi] = oi;
                          setAnswers(next);
                        }}
                      />
                      <span className="flex-1">{opt}</span>
                      {showState && isCorrect && <span className="text-success text-xs font-bold">正解</span>}
                      {showState && !isCorrect && isUser && <span className="text-danger text-xs font-bold">不正解</span>}
                    </label>
                  );
                })}
              </div>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-3 rounded-lg bg-slate-50 text-sm text-slate-700 leading-relaxed"
                >
                  <strong className="text-navy-900">解説：</strong> {q.explanation}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <div className="sticky bottom-3 sm:static sm:bottom-auto">
          <button
            type="button"
            disabled={answers.some((a) => a === -1)}
            className="btn-accent w-full sm:w-auto text-base"
            onClick={submit}
          >
            採点する
          </button>
          {answers.some((a) => a === -1) && (
            <div className="text-xs text-slate-500 mt-2">未回答の問題があります</div>
          )}
        </div>
      ) : (
        <div className="card p-6 text-center space-y-3">
          <div className="text-5xl">{passed ? '🎉' : '💪'}</div>
          <div className="text-2xl font-bold">
            {score} / {questions.length} 正解
          </div>
          <div className="text-sm text-slate-600">
            {passed
              ? `合格です！${chapterTitle} の理解が定着しています。`
              : 'もう少しで合格です。解説を読んで再チャレンジしてみましょう。'}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center pt-2">
            <button type="button" onClick={retry} className="btn-ghost">
              もう一度解く
            </button>
            {nextHref && (
              <Link to={nextHref} className="btn-accent">
                {nextLabel ?? '次へ進む →'}
              </Link>
            )}
            <Link to="/" className="btn-primary">
              ロードマップへ
            </Link>
          </div>
          {showFinale && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200">
              <div className="text-3xl">🏆</div>
              <div className="font-bold text-lg mt-1">全コース完走おめでとうございます！</div>
              <div className="text-sm text-slate-600 mt-1">
                よくここまで頑張りました。次は実際の少額投資で経験を積みましょう。
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export function findNextChapterStart(quizId: string): { href: string; label: string } | null {
  // quizId 例: 'ch1-quiz' から次の章の最初のレッスンを探す
  const m = quizId.match(/^ch(\d+)-quiz$/);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  const nextChapterId = `ch${n + 1}`;
  const firstLesson = allLessons.find((l) => l.id.startsWith(`${nextChapterId}-`));
  if (firstLesson) return { href: firstLesson.path, label: `Chapter ${n + 1} へ進む →` };
  // ch5 完了の場合は応用編へ
  if (n === 5) {
    return { href: '/advanced/japan-stocks', label: '応用編へ進む →' };
  }
  return null;
}

// 未使用警告を避けるためのexport
export { getNextLesson };
