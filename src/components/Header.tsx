import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useOverallProgress } from '../lib/progress';
import { allTrackableIds } from '../lib/curriculum';

type Props = {
  onToggleSidebar: () => void;
};

export function Header({ onToggleSidebar }: Props) {
  const { done, total } = useOverallProgress(allTrackableIds);
  const [open, setOpen] = useState(false);
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container-page flex h-14 items-center gap-3">
        {/* モバイル: サイドバートグル */}
        <button
          type="button"
          aria-label="サイドバーを開く"
          className="lg:hidden -ml-2 p-2 rounded-lg hover:bg-slate-100"
          onClick={onToggleSidebar}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl" aria-hidden>🧭</span>
          <div className="leading-tight">
            <div className="font-bold text-navy-900 group-hover:text-accent-dark transition">
              Kabu Compass
            </div>
            <div className="hidden sm:block text-[10px] text-slate-500 -mt-0.5">
              株式投資 入門〜中級ラーニング
            </div>
          </div>
        </Link>

        <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-slate-600">
          <div className="w-32 h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-accent transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="font-mono tabular-nums">
            {done}/{total}
          </span>
        </div>

        {/* PCナビ */}
        <nav className="hidden lg:flex items-center gap-1 ml-2">
          <NavItem to="/" exact>
            ホーム
          </NavItem>
          <NavItem to="/intro/money-journey">お金の旅</NavItem>
          <NavItem to="/advanced/case-studies">ケーススタディ</NavItem>
        </nav>

        {/* モバイル: その他メニュー */}
        <div className="relative lg:hidden">
          <button
            type="button"
            aria-label="メニュー"
            aria-expanded={open}
            className="p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
          {open && (
            <div
              className="absolute right-0 top-full mt-1 w-44 card py-1.5 text-sm"
              onClick={() => setOpen(false)}
            >
              <MobileLink to="/">ホーム</MobileLink>
              <MobileLink to="/intro/money-journey">お金の旅</MobileLink>
              <MobileLink to="/advanced/case-studies">ケーススタディ</MobileLink>
            </div>
          )}
        </div>
      </div>

      {/* モバイル用: 進捗バー (常時表示) */}
      <div className="md:hidden h-1 w-full bg-slate-100">
        <div
          className="h-full bg-accent transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </header>
  );
}

function NavItem({
  to,
  exact,
  children,
}: {
  to: string;
  exact?: boolean;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      end={exact}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
          isActive
            ? 'bg-navy-50 text-navy-800'
            : 'text-slate-600 hover:bg-slate-100'
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function MobileLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 hover:bg-slate-50 text-slate-700"
    >
      {children}
    </Link>
  );
}
