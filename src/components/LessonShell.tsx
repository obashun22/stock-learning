import { Link } from 'react-router-dom';
import { useEffect, useState, type ReactNode } from 'react';
import {
  findChapterByLessonId,
  findLesson,
  getNextLesson,
  getPrevLesson,
  allTrackableIds,
} from '../lib/curriculum';
import { useIsLessonDone, useProgress, useOverallProgress } from '../lib/progress';
import { LearningGoals } from './LearningGoals';
import { CompleteToast } from './CompleteToast';
import { Confetti } from './Confetti';
import clsx from 'clsx';

type Props = {
  lessonId: string;
  children: ReactNode;
};

export function LessonShell({ lessonId, children }: Props) {
  const lesson = findLesson(lessonId);
  const chapter = findChapterByLessonId(lessonId);
  const next = getNextLesson(lessonId);
  const prev = getPrevLesson(lessonId);
  const done = useIsLessonDone(lessonId);
  const markComplete = useProgress((s) => s.markLessonComplete);
  const unmark = useProgress((s) => s.unmarkLesson);
  const { done: doneCount, total } = useOverallProgress(allTrackableIds);

  const [showToast, setShowToast] = useState(false);
  const [showFinale, setShowFinale] = useState(false);

  if (!lesson || !chapter) return <div className="p-8">レッスンが見つかりません</div>;

  const handleComplete = () => {
    if (!done) {
      markComplete(lessonId);
      // 完了後の進捗を計算（このレッスンを含めた数）
      const willBeDone = doneCount + 1;
      if (willBeDone >= total) {
        setShowFinale(true);
      } else {
        setShowToast(true);
      }
    }
  };

  useEffect(() => {
    setShowToast(false);
  }, [lessonId]);

  const chapterLabel =
    chapter.number === 'intro'
      ? 'はじめに'
      : chapter.number === 'advanced'
        ? '応用編'
        : `Chapter ${chapter.number}`;

  return (
    <article className="container-page py-6 sm:py-10 space-y-6">
      <CompleteToast
        show={showToast}
        message={`「${lesson.title}」を完了しました！`}
        subtext={`進捗 ${doneCount + 1}/${total}`}
        onDone={() => setShowToast(false)}
      />
      <Confetti active={showFinale} />

      {/* パンくず */}
      <nav className="text-xs text-slate-500 flex items-center gap-1.5">
        <Link to="/" className="hover:text-navy-700">ホーム</Link>
        <span>›</span>
        <span>{chapterLabel}</span>
        <span>›</span>
        <span className="text-navy-700 font-medium truncate">{lesson.title}</span>
      </nav>

      {/* ヘッダー */}
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="chip">
            <span aria-hidden>{chapter.emoji}</span>
            {chapterLabel}
          </span>
          <span className="text-slate-500">⏱ 約{lesson.minutes}分</span>
          {done && <span className="chip-accent">✓ 完了済み</span>}
        </div>
        <h1 className="text-2xl sm:text-3xl">{lesson.title}</h1>
        <p className="text-slate-600 leading-relaxed">{lesson.blurb}</p>
      </header>

      <LearningGoals goals={lesson.goals} />

      {/* 本文 */}
      <div className="space-y-6">{children}</div>

      {/* 完了ボタン */}
      <div className="card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <div className="font-semibold text-navy-900">
            {done ? '✅ このレッスンは完了済みです' : 'レッスンを読み終えましたか？'}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            {done
              ? '進捗はブラウザに保存されています'
              : '「完了する」を押すと進捗が保存され、ロードマップに反映されます'}
          </div>
        </div>
        {done ? (
          <button
            type="button"
            className="btn-ghost text-xs"
            onClick={() => unmark(lessonId)}
          >
            未完了に戻す
          </button>
        ) : (
          <button
            type="button"
            className="btn-accent"
            onClick={handleComplete}
          >
            ✓ レッスンを完了する
          </button>
        )}
      </div>

      {/* 次へ / 戻る */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <NavCard
          to={prev?.path ?? '/'}
          label="前のレッスン"
          title={prev?.title ?? 'ホームへ戻る'}
          align="left"
        />
        <NavCard
          to={next?.path ?? '/'}
          label="次のレッスン"
          title={next?.title ?? '🎉 全レッスン完了'}
          align="right"
          accent
        />
      </div>

      {showFinale && <FinaleBanner />}
    </article>
  );
}

function NavCard({
  to,
  label,
  title,
  align,
  accent,
}: {
  to: string;
  label: string;
  title: string;
  align: 'left' | 'right';
  accent?: boolean;
}) {
  return (
    <Link
      to={to}
      className={clsx(
        'card px-4 py-3 hover:shadow-md transition group',
        align === 'right' && 'sm:text-right',
        accent && 'bg-gradient-to-br from-amber-50 to-white',
      )}
    >
      <div className={clsx('text-xs text-slate-500', accent && 'text-amber-700')}>
        {align === 'right' ? `${label} →` : `← ${label}`}
      </div>
      <div className="font-semibold text-navy-900 group-hover:text-accent-dark transition">
        {title}
      </div>
    </Link>
  );
}

function FinaleBanner() {
  return (
    <div className="card p-6 text-center bg-gradient-to-br from-amber-50 via-white to-emerald-50 border-amber-200">
      <div className="text-4xl mb-2">🏆</div>
      <h2 className="text-2xl mb-2">おめでとうございます！</h2>
      <p className="text-slate-600 leading-relaxed">
        すべてのレッスンとクイズを完了しました。<br />
        ここまで本当によく頑張りました 🎊<br />
        あとは実際に少額からでも、自分のお金を動かしてみるのが一番の学びです。
      </p>
    </div>
  );
}
