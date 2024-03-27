import {
  configurationService,
  movieService,
  trendingService,
} from '@/services';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      configurationService,
      movieService,
      trendingService,
    },
  };
});
