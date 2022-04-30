import {NavigationContainerRef} from '@react-navigation/core';
import {
  AuthorizationStackRoutes,
  CreateAppointmentsStackRoutes,
  MainTabRoutes,
  RootStackRoutes,
} from 'navigation/routes';

export type AllRoutes =
  | RootStackRoutes
  | AuthorizationStackRoutes
  | MainTabRoutes
  | CreateAppointmentsStackRoutes;

export interface INavigationService {
  setNavigationRef(
    ref: NavigationContainerRef<ReactNavigation.RootParamList>,
  ): void;
  push(route: AllRoutes, params?: Object): void;
  navigate(route: AllRoutes, params?: Object): void;
  replace(route: AllRoutes, params?: Object): void;
}
