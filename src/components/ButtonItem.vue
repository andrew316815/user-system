<template lang="pug">
button.button-item {{ label }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Нажать'
  }
})

</script>

<style lang="sass" scoped>
.button-item
  padding: 8px 32px
  outline: none
  background-color: #30c3b5
  border: none
  cursor: pointer
  transition: 0.15s
  width: 200px
  &:hover
    background-color: #28978c

</style>