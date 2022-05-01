import translations from 'localization';
import {MainTabRoutes} from 'navigation/routes';
import {IImages} from 'models/theme/IImage';
import {ITab} from 'models/screens/MainScreenTabs';

export const getTabs = (icons: IImages): Array<ITab> => {
  return [
    {
      name: MainTabRoutes.CreateAppointmentTab,
      displayedName: translations.createAppointmentTab,
      icon: icons.schedule,
    },
    {
      name: MainTabRoutes.AppointmentsListTab,
      displayedName: translations.appointmentsListTab,
      icon: icons.list,
    },
    {
      name: MainTabRoutes.ProfileTab,
      displayedName: translations.profileTab,
      icon: icons.profile,
    },
    {
      name: MainTabRoutes.InfoTab,
      displayedName: translations.mapTab,
      icon: icons.mapMarker,
    },
  ];
};
