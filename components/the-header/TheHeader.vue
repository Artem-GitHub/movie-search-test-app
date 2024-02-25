<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <header class="header">
    <div class="header__container">
      <button
        class="header__menu-button"
        type="button"
      >
        <nuxt-icon name="menu" />
      </button>

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
          class="header__link"
          :to="localePath('index')"
        >
          {{ $t('home') }}
        </NuxtLink>

        <NuxtLink
          class="header__link"
          no-prefetch
          :to="localePath('movies')"
        >
          {{ $t('movies') }}
        </NuxtLink>

        <NuxtLink
          class="header__link"
          no-prefetch
          :to="localePath('series')"
        >
          {{ $t('series') }}
        </NuxtLink>

        <NuxtLink
          class="header__link"
          no-prefetch
          :to="localePath('persons')"
        >
          {{ $t('persons') }}
        </NuxtLink>
      </nav>

      <div class="header__actions">
        <button
          class="header__search-button"
          type="button"
        >
          <nuxt-icon name="search" />
        </button>

        <button
          class="header__login-button"
          type="button"
        >
          <nuxt-icon name="login" />
        </button>

        <button
          class="header__locales-button"
          type="button"
        >
          En
        </button>
      </div>
    </div>

    <TheHeaderMobileMenu />
  </header>
</template>

<style lang="sass" scoped>
.header
  position: relative

  &__container
    display: flex
    align-items: center
    height: 6rem
    background-color: $primary-900
    -webkit-box-shadow: 0px 2px 10px 0px hex-with-alpha($black, 0.25)
    -moz-box-shadow: 0px 2px 10px 0px hex-with-alpha($black, 0.25)
    box-shadow: 0px 2px 10px 0px hex-with-alpha($black, 0.25)
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
    display: none
    display: flex
    column-gap: 2.4rem

    @include media-breakpoint-down(sm)
      display: none

  &__link
    font-size: 1.8rem
    font-weight: 600
    color: $primary-300
    transition: color 0.25s
    cursor: pointer

    &:hover,
    &.router-link-active
      color: $primary-50

  &__actions
    display: flex
    align-items: center
    column-gap: 2.4rem

  &__login-button,
  &__search-button,
  &__menu-button
    background-color: transparent

    & .nuxt-icon
      width: 2.4rem
      height: 2.4rem
      color: $primary-300
      transition: color 0.25s

    @include hover-adaptive()
      & .nuxt-icon
        color: $primary-50

  &__menu-button
    display: none

    @include media-breakpoint-down(sm)
      display: initial

  &__login-button
    @include media-breakpoint-down(sm)
      display: none

  &__locales-button
    display: flex
    justify-content: center
    align-items: center
    width: 3.2rem
    height: 3.2rem
    background-color: transparent
    font-size: 1.4rem
    font-weight: 600
    text-transform: uppercase
    color: $primary-300
    border: 2px solid $primary-300
    border-radius: 0.8rem
    transition: background-color 0.25s, color 0.25s, border-color 0.25s

    @include hover-adaptive()
      background-color: $primary-50
      color: $primary-900
      border-color: $primary-50

    @include media-breakpoint-down(sm)
      display: none
</style>
