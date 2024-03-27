<script lang="ts" setup>
import type { LinksListType } from '@/types';

const { t } = useI18n();
const localePath = useLocalePath();
const isShowMobileMenu = ref<boolean>(false);

const navigationLinks = computed<LinksListType>(() => [
  {
    title: t('home'),
    link: localePath('index'),
  },
  {
    title: t('movies'),
    link: localePath('movies'),
  },
  {
    title: t('series'),
    link: localePath('series'),
  },
  {
    title: t('persons'),
    link: localePath('persons'),
  },
]);

function toggleMobileMenu (): void {
  isShowMobileMenu.value = !isShowMobileMenu.value;
};

function closeMobileMenu (): void {
  isShowMobileMenu.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <BaseIconButton
        class="header__menu-button"
        :icon-name="'menu'"
        @click="toggleMobileMenu"
      />

      <NuxtLink
        class="header__logo"
        :to="localePath('index')"
      >
        <img
          class="header__logo-image"
          src="/logo.svg"
          height="24rem"
          width="auto"
          :alt="$t('logotype')"
        >
      </NuxtLink>

      <nav class="header__navigation">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.link"
          class="header__link font-body-18 font-weight-600"
          :to="link.link"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>

      <div class="header__actions">
        <BaseIconButton
          :icon-name="'search'"
          @click="closeMobileMenu"
        />

        <BaseIconButton
          class="header__login-button"
          :icon-name="'login'"
        />

        <TheHeaderLocales />
      </div>
    </div>

    <transition name="mobile-menu">
      <TheHeaderMobileMenu
        v-if="isShowMobileMenu"
        :navigation-links="navigationLinks"
        @on-menu-click="closeMobileMenu"
      />
    </transition>
  </header>
</template>

<style lang="sass" scoped>
.header
  position: relative

  &__container
    display: flex
    align-items: center
    height: $header-height
    background-color: $primary-900
    -webkit-box-shadow: 0px 2px 10px 0px hex-with-alpha($primary-900, 0.5)
    -moz-box-shadow: 0px 2px 10px 0px hex-with-alpha($primary-900, 0.5)
    box-shadow: 0px 2px 10px 0px hex-with-alpha($primary-900, 0.5)
    column-gap: 6rem
    padding: 0 3.2rem
    position: relative
    z-index: 2

    @include media-breakpoint-down(sm)
      column-gap: 2rem
      padding: 0 2.4rem

  &__logo
    height: 2.4rem
    width: 17.2rem

    @include media-breakpoint-down(sm)
      flex: 1
      height: 2rem

    &-image
      width: 100%
      height: 100%

  &__navigation
    flex: 1
    display: flex
    column-gap: 2.4rem

    @include media-breakpoint-down(sm)
      display: none

  &__link
    color: $primary-300
    transition: color 0.25s
    cursor: pointer

    &:hover,
    &.router-link-active
      color: $primary-50

  &__actions
    display: flex
    align-items: center
    column-gap: 0.8rem

  &__menu-button
    display: none

    @include media-breakpoint-down(sm)
      display: initial

  &__login-button
    @include media-breakpoint-down(sm)
      display: none

.mobile-menu-enter-active,
.mobile-menu-leave-active
  transition: transform 0.25s ease
  transform: translateY(-100%)
.mobile-menu-enter-from,
.mobile-menu-leave-to
  transform: translateY(-100%)
.mobile-menu-leave-from,
.mobile-menu-enter-to
  transform: translateY(0%)
</style>
