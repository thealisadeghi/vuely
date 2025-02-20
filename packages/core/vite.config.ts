import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import fs from 'fs';

// Read the initialization script
const initScript = fs.readFileSync(
  resolve(__dirname, 'src/utils/init-script.js'),
  'utf-8'
);

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'inject-init-script',
      transform(code, id) {
        if (id.endsWith('index.ts')) {
          return {
            code: `
              const initScript = ${JSON.stringify(initScript)};
              const script = document.createElement('script');
              script.textContent = initScript;
              if (document.head.firstChild) {
                document.head.insertBefore(script, document.head.firstChild);
              } else {
                document.head.appendChild(script);
              }
              ${code}
            `,
            map: null
          };
        }
      }
    }
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vuely',
      fileName: (format) => `vuely.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'vuely.css';
          return assetInfo.name;
        },
      },
    },
  },
}); 