<template lang="pug">
.users-page
    ButtonItem.user-page__button(
      :class="{ blocked: hasRequest }"
      label="Загрузить данные"
      @click="getUsers"
    )
    img.users-page__loader(
      v-if="hasRequest"
      src="@/assets/icons/loader.svg"
      )
    .users-page__content( v-else )
      UserItem.users-page__item(
        v-for="user, idx in users"
        :key="user.id"
        :userInfo="user.info"
        :completedCount="user.completedCount"
      )
</template>

<script setup lang="ts">
import ButtonItem from '@/components/ButtonItem.vue'
import UserItem from '@/components/UserItem.vue'
import store from '@/store'
import { computed, ref } from '@vue/runtime-core'


const hasRequest = ref( false )
const getUsers = async () => {
  hasRequest.value = true
  await store.dispatch( 'getUsers' )
  hasRequest.value = false
}

const users = computed( () => store.getters.users )

</script>

<style lang="sass" scoped>
.users-page
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 0px 20px 20px 20px
  &__loader
    display: block
    align-self: center
    margin-top: 100px
  &__content
    align-self: normal
    margin-top: 10px
    display: grid
    grid-template-columns: repeat( auto-fit, minmax(300px, 1fr) )
    gap: 10px
</style>