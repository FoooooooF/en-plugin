# enPlugin

enPlugin 是一个 chrome 插件,用于在浏览器中记录单词或者句子,并记录在浏览器的本地数据库中

## 功能

1. 记录单词或者句子
2. 保存到浏览器本地数据库
3. 支持按照日期查询单词和句子
4. 支持按照单词或者句子查询

<!-- 1. 实时翻译单词
1. 记录翻译历史
2. 支持英汉翻译
3. 支持多种翻译引擎
4. 支持多种翻译模式
5. 支持多种翻译结果展示方式
6. 每日将翻译历史同步到客户微信或者邮箱 -->

## 技术栈

1. 前端: React + TypeScript + TailwindCSS
<!-- 2. 后端: Node.js + Express + MongoDB
2. 翻译引擎: 有道翻译 API
3. 翻译模式: 单词翻译
4. 翻译结果展示方式: 弹窗-->

## 安装

1. 下载代码
2. 在 chrome 中打开 chrome://extensions/
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
      tsconfigRootDir: import.meta.dirname
    }
  }
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
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules
  }
})
```

## 数据存储

本应用使用 IndexedDB 作为本地数据存储方案，支持：

- 存储翻译历史记录
- 自动按时间戳排序
- 持久化数据
- 大容量存储

## 打包

```bash
npm run build:crx
```

打包后会生成一个 `enPlugin.crx` 文件，可以在 chrome 中安装

```bash
# 打开 Chrome 浏览器
# 进入 chrome://extensions/
# 开启"开发者模式"
# 点击"打包扩展程序"
# 选择 dist 目录
# 生成 .crx 文件和 .pem 私钥文件
```
