<template lang="pug">
.charts-page
    .charts-page__warning( v-if="!users.length" ) Пользователи не найдены. Перейдите на страницу пользователей и попробуйте загрузить данные.
    .charts-page__line( v-else )
      Chartist.charts-page__chart(
        type="Bar"
        :data="chartData"
        :options="chartOptions"
      )
      .charts-page__label ID Пользователя 
      .charts-page__label--vertical Количество успешных 'title'
</template>

<script setup lang="ts">
import ButtonItem from '@/components/ButtonItem.vue'
import UserItem from '@/components/UserItem.vue'
import store from '@/store'
import type { CompletedUser } from '@/types'
import { computed, reactive, ref } from '@vue/runtime-core'

const hasRequest = ref( false )
const getUsers = async () => {
  hasRequest.value = true
  await store.dispatch( 'getUsers' )
  hasRequest.value = false
}

const users = computed( () => store.getters.users )

const chartData = reactive({
  labels: users.value.map( ( item: CompletedUser ) => item.info[0].userId ),
  series: [
    users.value.map( ( item: CompletedUser ) => item.completedCount ),
    users.value.map( ( item: CompletedUser ) => item.info.length - item.completedCount ),
  ]
})
const chartOptions = {
  height: '300px',
  showArea: true
}

</script>

<style lang="sass">
.charts-page
  padding: 25px
  height: 400px
  position: relative
  &__chart
    height: 300px
  &__label
    &--vertical
      position: absolute
      transform: rotate(270deg)
      top: 140px
      left: -75px

.ct-series-a .ct-bar
  stroke: #07994a

.ct-series-b .ct-bar
  stroke: #ea2a35
</style>