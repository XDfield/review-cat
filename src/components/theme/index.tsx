import * as React from 'react';

const StaticServices = require('monaco-editor/esm/vs/editor/standalone/browser/standaloneServices')
  .StaticServices;
const ThemeService = StaticServices.standaloneThemeService.get();

interface ITheme {
  getColor(colorId: string): string | undefined;
}

const defaultTheme: ITheme = {
  getColor(colorId: string) {
    return undefined;
  },
};

// make a theme context
const ThemeContext = React.createContext(defaultTheme);

export const ThemeProvider = (props: any) => {
  const [currentTheme, setTheme] = React.useState(defaultTheme);
  ThemeService.onThemeChange((newTheme: any) =>
    setTheme({
      getColor(colorId: string) {
        const color = newTheme.getColor(colorId);
        return color ? color.toString() : undefined;
      },
    })
  );

  return (
    <ThemeContext.Provider value={currentTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export const ThemeConsumer = ThemeContext.Consumer;

export interface IThemeable {
  theme: ITheme;
  children?: React.ReactNode;
}

export const withTheme = <P extends IThemeable>(
  Component: React.ComponentType<P>
) => {
  return (props: Pick<P, Exclude<keyof P, 'theme'>>) => (
    <ThemeConsumer>
      {theme => <Component {...props as P} theme={theme} />}
    </ThemeConsumer>
  );
};
