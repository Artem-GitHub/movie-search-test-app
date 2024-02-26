<script lang="ts" setup>
const localePath = useLocalePath();

const emit = defineEmits<{(e: 'on-menu-click'): void}>();
</script>

<template>
  <div class="mobile-menu">
    <nav
      class="mobile-menu__navigation"
      @click="emit('on-menu-click')"
    >
      <NuxtLink
        class="mobile-menu__link"
        :to="localePath('index')"
      >
        {{ $t('home') }}
      </NuxtLink>

      <NuxtLink
        class="mobile-menu__link"
        no-prefetch
        :to="localePath('movies')"
      >
        {{ $t('movies') }}
      </NuxtLink>

      <NuxtLink
        class="mobile-menu__link"
        no-prefetch
        :to="localePath('series')"
      >
        {{ $t('series') }}
      </NuxtLink>

      <NuxtLink
        class="mobile-menu__link"
        no-prefetch
        :to="localePath('persons')"
      >
        {{ $t('persons') }}
      </NuxtLink>
    </nav>

    <div class="mobile-menu__actions">
      <div class="mobile-menu__login">
        <button
          class="mobile-menu__login-button"
          type="button"
        >
          <nuxt-icon name="login" />
          <span>{{ $t('Sign in') }}</span>
        </button>
      </div>

      <div class="mobile-menu__locales">
        <button
          class="mobile-menu__locales-button mobile-menu__locales-button--active"
          type="button"
        >
          En
        </button>

        <button
          class="mobile-menu__locales-button"
          type="button"
        >
          UK
        </button>

        <button
          class="mobile-menu__locales-button"
          type="button"
        >
          RU
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.mobile-menu
  display: flex
  flex-direction: column
  width: 100%
  min-height: calc(100vh - 6rem)
  background-color: $primary-900
  position: absolute
  z-index: 1

  @include media-breakpoint-up(sm)
    display: none

  &__navigation
    display: flex
    flex-direction: column
    flex: 1
    border-bottom: solid 1px $primary-300
    padding-top: 2.4rem

  &__link
    display: flex
    align-items: center
    height: 5.2rem
    font-size: 2.2rem
    color: $primary-50
    padding-left: 2.4rem
    cursor: pointer

    &:hover,
    &.router-link-active
      background-color: $primary-800

  &__actions
    padding: 2.4rem 2.4rem 6.8rem

  &__login
    display: flex
    align-items: center
    margin-bottom: 2.4rem

  &__login-button
    background-color: transparent
    font-size:  2rem
    color: $primary-300
    transition: color 0.25s

    & .nuxt-icon
      width: 3.2rem
      height: 3.2rem
      color: $primary-300
      margin-right: 0.8rem
      transition: color 0.25s

    @include hover-adaptive()
      color: $primary-50

      & .nuxt-icon
        color: $primary-50

  &__locales
    display: flex
    column-gap: 1.6rem

  &__locales-button
    display: flex
    justify-content: center
    align-items: center
    width: 3.6rem
    height: 3.6rem
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

    &--active
      background-color: $primary-50
      color: $primary-900
      border-color: $primary-50
</style>
