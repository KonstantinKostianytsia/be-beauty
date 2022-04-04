import {useContext} from 'react';
import {getImages, ThemeContext} from 'styles';

export const useTheme = () => {
  const {themeMode} = useContext(ThemeContext);

  const images = getImages(themeMode);

  return {
    images,
  };
};
