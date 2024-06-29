<script lang="ts" setup>
import type { ObjectDirective } from 'vue';

type FocusableElement = HTMLInputElement | HTMLTextAreaElement;

const VFocus: ObjectDirective<FocusableElement> = {
  mounted: (element: FocusableElement) => {
    element.focus();
  },
};
</script>

<template>
  <input v-focus />
  directiva local
</template>

<style scoped></style>
