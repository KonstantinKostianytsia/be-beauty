import LocalizedStrings from 'react-native-localization';
import {englishTranslations} from './translations/english';
import {ukrainianTranslations} from './translations/ukrainian';

const translations = new LocalizedStrings({
  en: englishTranslations,
  ua: ukrainianTranslations,
});

export default translations;
