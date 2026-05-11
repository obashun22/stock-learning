import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

// 「こういう時どうする？」分岐選択型の練習問題。
// 即答後に解説と「よくある誤答」を表示。

export type CaseChoice = {
  label: string;
  outcome: 'best' | 'ok' | 'bad';
  feedback: string;
};

export type Case = {
  id: string;
  title: string;
  scenario: string;
  emoji: string;
  choices: CaseChoice[];
  lesson: string;
};

type Props = {
  cases: Case[];
};

export function CaseStudyList({ cases }: Props) {
  return (
    <div className="space-y-4">
      {cases.map((c, i) => (
        <CaseStudyItem key={c.id} caseData={c} index={i} />
      ))}
    </div>
  );
}

function CaseStudyItem({ caseData, index }: { caseData: Case; index: number }) {
  const [picked, setPicked] = useState<number | null>(null);

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-9 h-9 rounded-full bg-navy-700 text-white flex items-center justify-center font-bold text-sm">
          Q{index + 1}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{caseData.emoji}</span>
            <h3 className="text-lg font-bold text-navy-900">{caseData.title}</h3>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">{caseData.scenario}</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {caseData.choices.map((choice, i) => {
          const isPicked = picked === i;
          const showState = picked !== null;
          const tone = {
            best: 'bg-emerald-50 border-emerald-300 text-emerald-900',
            ok: 'bg-amber-50 border-amber-300 text-amber-900',
            bad: 'bg-rose-50 border-rose-300 text-rose-900',
          }[choice.outcome];
          return (
            <button
              key={i}
              type="button"
              disabled={showState}
              onClick={() => setPicked(i)}
              className={clsx(
                'w-full text-left px-4 py-3 rounded-xl border-2 transition text-sm',
                !showState && 'border-slate-200 hover:border-navy-400 hover:bg-slate-50',
                showState && isPicked && tone,
                showState && !isPicked && 'border-slate-200 opacity-50',
              )}
            >
              <div className="flex items-start gap-2">
                <span className="font-bold">{String.fromCharCode(65 + i)}.</span>
                <span className="flex-1">{choice.label}</span>
                {showState && isPicked && (
                  <span>
                    {choice.outcome === 'best' && '✅'}
                    {choice.outcome === 'ok' && '⚠️'}
                    {choice.outcome === 'bad' && '❌'}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {picked !== null && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 space-y-3"
          >
            <div className="p-4 rounded-xl bg-navy-50/60 border border-navy-100">
              <div className="text-xs font-semibold text-navy-700 mb-1">あなたの選択へのフィードバック</div>
              <p className="text-sm text-slate-800 leading-relaxed">{caseData.choices[picked].feedback}</p>
            </div>
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-100">
              <div className="text-xs font-semibold text-amber-800 mb-1">💡 このケースから学ぶこと</div>
              <p className="text-sm text-amber-900/90 leading-relaxed">{caseData.lesson}</p>
            </div>
            <button
              type="button"
              onClick={() => setPicked(null)}
              className="text-xs text-slate-500 hover:text-navy-700"
            >
              ↻ もう一度この問題を解く
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
