<template>
  <main class="main">
    <TheHeader />
    <slot />
  </main>
</template>

<style lang="sass" scoped>
.main
  min-height: 100vh
  background-color: $primary-800
</style>
