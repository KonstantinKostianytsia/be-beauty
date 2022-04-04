import {IThemeContext} from 'models/theme/IThemeContext';
import {ThemeMode} from 'models/theme/themeMode';
import {createContext} from 'react';
import {lightImages} from './images';

export const getImages = (themeMode: ThemeMode) => {
  switch (themeMode) {
    case ThemeMode.LIGHT:
      return lightImages;
  }
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
export const ThemeProvider = ThemeContext.Provider;

export const themeContext: IThemeContext = {
  themeMode: ThemeMode.LIGHT,
};
