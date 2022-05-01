import {Route} from '@react-navigation/native';
import translations from 'localization/index';
import {CreateAppointmentsStackRoutes, MainTabRoutes} from 'navigation/routes';

export function isHeaderNeeded(route: Route<string, object | undefined>) {
  switch (route.name) {
    case CreateAppointmentsStackRoutes.MapSelectSalon:
    case MainTabRoutes.AppointmentsListTab:
    case MainTabRoutes.InfoTab:
    case MainTabRoutes.ProfileTab:
      return true;
  }
}

export function getHeaderText(route: Route<string, object | undefined>) {
  switch (route.name) {
    case CreateAppointmentsStackRoutes.MapSelectSalon:
      return translations.headers.createAppointment.selectSalon;
    case MainTabRoutes.AppointmentsListTab:
      return translations.headers.appointmentList;
    case MainTabRoutes.InfoTab:
      return translations.headers.infoTab;
    case MainTabRoutes.ProfileTab:
      return translations.headers.profileTab;
  }
}
