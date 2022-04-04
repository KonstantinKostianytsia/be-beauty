import {MainTabRoutes} from 'navigation/routes';
import {ImageSourcePropType} from 'react-native';

export interface ITab {
  name: MainTabRoutes;
  displayedName: string;
  icon: ImageSourcePropType;
}
