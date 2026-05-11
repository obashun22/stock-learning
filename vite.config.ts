import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages では https://<user>.github.io/<repo>/ で配信されるので
// base にリポジトリ名を入れる。ローカル開発時は GITHUB_PAGES 環境変数なしで '/' になる。
const isPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isPages ? '/stock-learning/' : '/',
});
