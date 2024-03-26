import moment from 'moment';
import 'moment/dist/locale/ru';
import 'moment/dist/locale/uk';

export default defineNuxtPlugin((nuxtApp) => {
  const { $i18n } = nuxtApp;
  // @ts-ignore
  const localeCode = $i18n.locale.value;
  moment.locale(localeCode);

  nuxtApp.hook('i18n:localeSwitched', ({ oldLocale, newLocale }) => {
    if (newLocale !== oldLocale) {
      moment.locale(newLocale);
    }
  });

  return { provide: { moment: moment as typeof moment } };
});
