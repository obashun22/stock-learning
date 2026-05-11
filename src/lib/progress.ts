// Zustand + localStorage で学習進捗を保存する。
// レッスン完了 / クイズスコア / 最終アクセス日時を管理。

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useMemo } from 'react';

type QuizResult = {
  score: number;
  total: number;
  passedAt: number; // unix ms
};

type ProgressState = {
  completedLessons: Record<string, number>; // lessonId -> completed unix ms
  quizResults: Record<string, QuizResult>;
  lastVisited?: string; // lesson path
  markLessonComplete: (lessonId: string) => void;
  unmarkLesson: (lessonId: string) => void;
  recordQuiz: (quizId: string, score: number, total: number) => void;
  setLastVisited: (path: string) => void;
  reset: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      completedLessons: {},
      quizResults: {},
      markLessonComplete: (lessonId) =>
        set((s) => ({
          completedLessons: { ...s.completedLessons, [lessonId]: Date.now() },
        })),
      unmarkLesson: (lessonId) =>
        set((s) => {
          const next = { ...s.completedLessons };
          delete next[lessonId];
          return { completedLessons: next };
        }),
      recordQuiz: (quizId, score, total) =>
        set((s) => ({
          quizResults: {
            ...s.quizResults,
            [quizId]: { score, total, passedAt: Date.now() },
          },
        })),
      setLastVisited: (path) => set({ lastVisited: path }),
      reset: () =>
        set({ completedLessons: {}, quizResults: {}, lastVisited: undefined }),
    }),
    { name: 'kabu-compass-progress-v1' },
  ),
);

// 派生セレクタ
export function useIsLessonDone(lessonId: string): boolean {
  return useProgress((s) => Boolean(s.completedLessons[lessonId]));
}

export function useQuizResult(quizId: string): QuizResult | undefined {
  return useProgress((s) => s.quizResults[quizId]);
}

export function useOverallProgress(allIds: string[]): {
  done: number;
  total: number;
  ratio: number;
} {
  // selector で新規オブジェクトを返すと再レンダーループになるので、
  // 個別に subscribe してから useMemo で派生値を作る。
  const completed = useProgress((s) => s.completedLessons);
  const quizzes = useProgress((s) => s.quizResults);
  return useMemo(() => {
    const done = allIds.filter(
      (id) => Boolean(completed[id]) || Boolean(quizzes[id]),
    ).length;
    return {
      done,
      total: allIds.length,
      ratio: allIds.length ? done / allIds.length : 0,
    };
  }, [allIds, completed, quizzes]);
}
