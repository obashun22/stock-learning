import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { chapters } from '../lib/curriculum';
import { useProgress } from '../lib/progress';
import clsx from 'clsx';

type Props = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: Props) {
  const location = useLocation();
  const completed = useProgress((s) => s.completedLessons);
  const quizResults = useProgress((s) => s.quizResults);

  // パス変化時にモバイルでは閉じる
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {/* オーバーレイ (モバイル) */}
      {open && (
        <button
          type="button"
          aria-label="閉じる"
          onClick={onClose}
          className="lg:hidden fixed inset-0 z-40 bg-navy-900/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={clsx(
          'fixed lg:sticky top-0 lg:top-14 z-50 lg:z-auto',
          'h-screen lg:h-[calc(100vh-3.5rem)] w-72 lg:w-64 shrink-0',
          'bg-white border-r border-slate-200',
          'transition-transform duration-200',
          'overflow-y-auto',
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:hidden border-b border-slate-100">
          <div className="font-semibold text-navy-900">学習ロードマップ</div>
          <button
            type="button"
            aria-label="閉じる"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        <nav className="p-3 space-y-4 pb-20">
          {chapters.map((chapter) => (
            <div key={chapter.id}>
              <div className="px-2 mb-1.5 flex items-center gap-2">
                <span aria-hidden>{chapter.emoji}</span>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                  {chapter.number === 'intro'
                    ? 'Intro'
                    : chapter.number === 'advanced'
                      ? 'Advanced'
                      : `Chapter ${chapter.number}`}
                </div>
              </div>
              <div className="px-2 mb-2 text-sm font-bold text-navy-900">
                {chapter.title}
              </div>
              <ul className="space-y-0.5">
                {chapter.lessons.map((lesson) => {
                  const isDone = Boolean(completed[lesson.id]);
                  return (
                    <li key={lesson.id}>
                      <NavLink
                        to={lesson.path}
                        className={({ isActive }) =>
                          clsx(
                            'flex items-start gap-2 px-2 py-1.5 rounded-lg text-[13px] leading-snug transition',
                            isActive
                              ? 'bg-navy-50 text-navy-800'
                              : 'text-slate-600 hover:bg-slate-50',
                          )
                        }
                      >
                        <StatusDot done={isDone} />
                        <span className="flex-1">{lesson.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
                {chapter.quiz && (
                  <li>
                    <NavLink
                      to={chapter.quiz.path}
                      className={({ isActive }) =>
                        clsx(
                          'flex items-start gap-2 px-2 py-1.5 rounded-lg text-[13px] font-medium transition',
                          isActive
                            ? 'bg-amber-50 text-amber-800'
                            : 'text-amber-700 hover:bg-amber-50/60',
                        )
                      }
                    >
                      <span className="mt-0.5">📝</span>
                      <span className="flex-1">
                        章末クイズ
                        {quizResults[chapter.quiz.id] && (
                          <span className="ml-1 text-[10px] text-amber-600">
                            ({quizResults[chapter.quiz.id].score}/
                            {quizResults[chapter.quiz.id].total})
                          </span>
                        )}
                      </span>
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          ))}

          <div className="px-2 pt-2 border-t border-slate-100">
            <ResetButton />
          </div>
        </nav>
      </aside>
    </>
  );
}

function StatusDot({ done }: { done: boolean }) {
  return (
    <span
      className={clsx(
        'mt-1.5 inline-block w-1.5 h-1.5 rounded-full shrink-0',
        done ? 'bg-success' : 'bg-slate-300',
      )}
      aria-hidden
    />
  );
}

function ResetButton() {
  const reset = useProgress((s) => s.reset);
  return (
    <button
      type="button"
      onClick={() => {
        if (confirm('学習進捗をすべてリセットします。よろしいですか？')) {
          reset();
        }
      }}
      className="w-full mt-2 text-xs text-slate-500 hover:text-danger transition"
    >
      進捗をリセット
    </button>
  );
}
