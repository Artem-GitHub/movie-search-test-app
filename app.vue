<script lang="ts" setup>
const configurationStore = useConfigurationStore();

await useAsyncData('configuration', () => configurationStore.getDetails());
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
