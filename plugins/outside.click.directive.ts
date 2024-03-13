export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('out-click', {
    mounted (element, binding) {
      element.clickOutsideEvent = (event: Event): void => {
        binding.value(event);
      };

      element.clickInsideEvent = (event: Event): void => event.stopPropagation();

      document.addEventListener('click', element.clickOutsideEvent);
      element.addEventListener('click', element.clickInsideEvent);
    },
    unmounted (element) {
      document.removeEventListener('click', element.clickOutsideEvent);
      element.removeEventListener('click', element.clickInsideEvent);
    },
  });
});

/** Alternate implementation method. Doesn't work with NuxtLink */

// mounted (element, binding) {
//   element.clickOutsideEvent = function (event: Event) {
//     if (!(element === event.target || element.contains(event.target))) {
//       binding.value(event);
//     }
//   };
//   document.addEventListener('click', element.clickOutsideEvent);
// },
// unmounted (element) {
//   document.removeEventListener('click', element.clickOutsideEvent);
// },
