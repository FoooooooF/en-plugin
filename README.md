# enPlugin
enPlugin 是一个chrome插件,用于在浏览器中实时翻译单词,并记录翻译历史

## 功能
1. 实时翻译单词
2. 记录翻译历史
3. 支持英汉翻译
4. 支持多种翻译引擎
5. 支持多种翻译模式
6. 支持多种翻译结果展示方式
7. 每日将翻译历史同步到客户微信或者邮箱

## 技术栈
1. 前端: React + TypeScript + TailwindCSS
2. 后端: Node.js + Express + MongoDB
3. 翻译引擎: 有道翻译API
4. 翻译模式: 单词翻译
5. 翻译结果展示方式: 弹窗

## 安装
1. 下载代码
2. 在chrome中打开chrome://extensions/
3. 点击"加载已解压的扩展程序"
4. 选择代码目录
5. 完成

## 使用
1. 在浏览器中打开任意网页
2. 选中单词
3. 点击插件图标
4. 完成

## 目录结构
```
en-plugin/
├── public/
│   ├── manifest.json
│   └── icon.png
├── src/
│   ├── components/
│   │   ├── TranslationPopup.tsx
│   │   └── HistoryList.tsx
│   ├── hooks/
│   │   ├── useTranslation.ts
│   │   └── useHistoryStorage.ts
│   ├── services/
│   │   └── translationService.ts
│   ├── utils/
│   │   └── storageHelper.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       └── index.css
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
