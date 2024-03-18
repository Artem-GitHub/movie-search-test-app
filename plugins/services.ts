import {
  movieService,
  trendingService,
} from '@/services';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      movieService,
      trendingService,
    },
  };
});
