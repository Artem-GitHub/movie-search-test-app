<script lang="ts" setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const isShowPopup = ref(false);

const currentLocale = computed<string>(() => locale.value);

const availableLocales = computed(() => {
  return locales.value.filter(locale => typeof locale === 'string'
    ? locale !== currentLocale.value
    : locale.code !== currentLocale.value
  );
});

function toggleLocalesPopup (): void {
  isShowPopup.value = !isShowPopup.value;
};

function closeLocalesPopup (): void {
  isShowPopup.value = false;
};
</script>

<template>
  <div class="locales">
    <button
      class="locales__button"
      type="button"
      @click.stop="toggleLocalesPopup"
    >
      {{ currentLocale }}
    </button>

    <transition name="locales-popup">
      <div
        v-if="isShowPopup"
        v-out-click="closeLocalesPopup"
        class="locales__popup"
      >
        <nav class="locales__navigation">
          <NuxtLink
            v-for="availableLocale in availableLocales"
            :key="typeof availableLocale === 'string' ? availableLocale : availableLocale.code"
            class="locales__link"
            :to="switchLocalePath(typeof availableLocale === 'string' ? availableLocale : availableLocale.code)"
          >
            {{ typeof availableLocale === 'string' ? availableLocale : availableLocale.code }}
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style lang="sass" scoped>
.locales
  display: flex
  flex-direction: column
  position: relative

  @include media-breakpoint-down(sm)
    display: none

  &__button,
  &__link
    width: 3.2rem
    height: 3.2rem
    background-color: transparent
    font-size: 1.4rem
    font-weight: 600
    text-transform: uppercase
    color: $primary-300
    border-radius: 0.8rem
    transition: background-color 0.25s, color 0.25s, border-color 0.25s

    @include hover-adaptive()
      background-color: $primary-50
      color: $primary-900
      border-color: $primary-50

  &__button
    border: 2px solid $primary-300

  &__popup
    background-color: $primary-900
    -webkit-box-shadow: 0px 0px 10px 2px hex-with-alpha($primary-900, 0.5)
    -moz-box-shadow: 0px 0px 10px 2px hex-with-alpha($primary-900, 0.5)
    box-shadow: 0px 0px 10px 2px hex-with-alpha($primary-900, 0.5)
    border-radius: 0.8rem
    padding: 0.4rem
    position: absolute
    top: 4.8rem
    left: -0.4rem

  &__navigation
    display: flex
    flex-direction: column
    row-gap: 0.4rem
    overflow: hidden

  &__link
    display: flex
    justify-content: center
    align-items: center

.locales-popup-enter-active,
.locales-popup-leave-active
  transition: opacity 0.25s ease, transform 0.25s ease

  & .locales__link
    transition: transform 0.25s ease
.locales-popup-enter-from,
.locales-popup-leave-to
  opacity: 0
  transform: translateY(-10%)

  & .locales__navigation :first-child
    transform: translateY(calc(-100% - 0.4rem))

  & .locales__navigation :last-child
    transform: translateY(calc(-200% - 0.8rem))
.locales-popup-leave-from,
.locales-popup-enter-to
  opacity: 1
  transform: translateY(0)

  & .locales__link
    transform: translateY(0)
</style>
