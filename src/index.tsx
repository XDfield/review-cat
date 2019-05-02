import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { ThemeProvider } from 'components/theme';

// 加载 monaco 默认语言
import 'monaco-editor/esm/vs/basic-languages/monaco.contribution';
// 添加额外的主题
import 'plugins/extThemes';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
