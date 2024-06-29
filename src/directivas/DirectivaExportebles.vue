<script lang="ts" setup>
import { colorTextDirective as vColorText } from '../customDirectives/colorTextDirective.ts';
</script>

<template>
  <p v-color-text="'red'">Directiva Exportables</p>
</template>

<style scoped>
.input:focus {
  border-color: blue;
}
</style>
