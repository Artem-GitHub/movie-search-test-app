import type { ServicesInterface } from '@/types';
import { movieService } from '@/services';

export default defineNuxtPlugin(() => {
  const services: ServicesInterface = {
    movie: movieService,
  };

  return { provide: { services } };
});
