import * as monacoApi from 'monaco-editor/esm/vs/editor/editor.api';
import oneDarkPro from './themes/oneDarkPro';

[oneDarkPro].forEach(({ name, base, colors, tokenColors }) => {
  monacoApi.editor.defineTheme(name, {
    base: base as monacoApi.editor.BuiltinTheme,
    inherit: true,
    colors,
    rules: tokenColors.map(({ scope, settings }: any) => ({
      token: scope,
      foreground: settings.foreground,
      background: settings.background,
      fontStyle: settings.fontStyle,
    })),
  });
});
