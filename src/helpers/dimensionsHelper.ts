import {Dimensions} from 'react-native';

export function getWindowDimensions() {
  return Dimensions.get('window');
}

export function getScreenDimensions() {
  return Dimensions.get('screen');
}
