import {IColors} from 'models/theme/IColors';
import {IImages} from 'models/theme/IImage';
import {useContext} from 'react';
import {getImages, ThemeContext} from 'styles';
import {getColors} from 'styles';

interface IUseTheme {
  images: IImages;
  colors: IColors;
}

export const useTheme = (): IUseTheme => {
  const {themeMode} = useContext(ThemeContext);

  const images = getImages(themeMode);
  const colors = getColors(themeMode);

  return {
    images,
    colors,
  };
};
