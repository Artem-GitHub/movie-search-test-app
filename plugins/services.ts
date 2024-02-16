import { movieService } from '@/services';

export default defineNuxtPlugin(() => {
  return { provide: { movieService } };
});
