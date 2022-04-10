import {IColors} from 'models/theme/IColors';
import {IImages} from 'models/theme/IImage';
import {IThemeContext} from 'models/theme/IThemeContext';
import {ThemeMode} from 'models/theme/themeMode';
import {createContext} from 'react';
import {lightColors} from './colors';
import {lightImages} from './images';

export const getImages = (themeMode: ThemeMode): IImages => {
  switch (themeMode) {
    case ThemeMode.LIGHT:
      return lightImages;
  }
};

export const getColors = (themeMode: ThemeMode): IColors => {
  switch (themeMode) {
    case ThemeMode.LIGHT:
      return lightColors;
  }
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
export const ThemeProvider = ThemeContext.Provider;

export const themeContext: IThemeContext = {
  themeMode: ThemeMode.LIGHT,
};
