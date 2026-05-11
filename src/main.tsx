import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

// GitHub Pages のような静的ホスティングでも 404 ハックなしに動かせる HashRouter を採用。
// URLは /#/chapter/1/lesson/1 の形になるが、学習サイトとしては許容範囲。
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
