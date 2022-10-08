<template lang="pug">
.user-item
    .user-item__header
      .user-item__label ID Пользователя: {{ userId }}
      .user-item__completed
        span.user-item__success {{ completedCount }}
        span  / 
        span.user-item__failed {{ userInfo.length - completedCount }}
    ul
      li(
        v-for="user, idx in userInfo"
        :key="user.id"
      ) {{ user.title }}
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { PropType } from 'vue'
import type { UserItem } from '@/types'

const props = defineProps({
  userInfo: {
    type: Array as PropType<Array<UserItem>>,
    required: true,
    default: () => []
  },
  completedCount: {
    type: Number,
    required: true,
    default: 0
  }
})

const userId = computed( () => props.userInfo[0].userId )

</script>

<style lang="sass" scoped>
.user-item
  padding: 15px 5px
  border: 1px solid rgba(222, 223, 224, 1)
  box-shadow: 0 3px 6px -2px rgba(222, 223, 224, 1)
  &__header
    padding: 0px 20px
    display: flex
    justify-content: space-between
  &__success
    color: green
  &__failed
    color: red
  &__label
    font-weight: bold

li
  font-size: 14px
</style>