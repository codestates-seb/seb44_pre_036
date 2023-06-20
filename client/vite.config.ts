import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});

// vite에서는 ReactComponent로 svg 파일을 그냥 사용할 수 없어서 svgr 플러그인을 package.json에 추가하고 이 파일의 plugins에도 추가해주었습니다.
