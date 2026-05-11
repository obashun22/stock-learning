import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// レッスン完了時に画面下から「完了！」とポップアップする小さなトースト。
// 自動で 2.4 秒後に消える。

type Props = {
  show: boolean;
  message?: string;
  subtext?: string;
  onDone?: () => void;
};

export function CompleteToast({ show, message = '完了しました！', subtext, onDone }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        onDone?.();
      }, 2400);
      return () => clearTimeout(t);
    }
  }, [show, onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed inset-x-0 bottom-5 z-[60] flex justify-center px-4 pointer-events-none"
          role="status"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-navy-900 text-white shadow-xl pointer-events-auto max-w-sm">
            <span className="text-xl" aria-hidden>🎉</span>
            <div className="leading-tight">
              <div className="font-bold text-sm">{message}</div>
              {subtext && <div className="text-[11px] text-white/70 mt-0.5">{subtext}</div>}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
