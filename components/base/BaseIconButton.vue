<script lang="ts" setup>
const props = defineProps<{ iconName: string }>();
const emit = defineEmits<{(e: 'click', event: Event): void}>();
</script>

<template>
  <button
    class="base-icon-button"
    type="button"
    @click="emit('click', $event)"
  >
    <nuxt-icon :name="props.iconName" />
  </button>
</template>

<style lang="sass">
.base-icon-button
  width: 3.6rem
  height: 3.6rem
  border-radius: 50%
  background-color: transparent
  transition: background-color 0.25s

  & .nuxt-icon
    width: 2.4rem
    height: 2.4rem
    color: $primary-300
    transition: color 0.25s

  @include hover-adaptive()
    & .nuxt-icon
      color: $primary-50

  &:active
    background-color: $primary-700
</style>
