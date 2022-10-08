<template lang="pug">
.app
  nav
    router-link( to="/" ) Пользователи
    router-link( to="/graphics") График  
  router-view
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 0px
  padding: 0px

html, body
  margin: 0px
  padding: 0px

html
  height: 100vh


nav
  padding: 25px
  text-align: left

  a
    font-weight: bold
    color: #2c3e50
    margin-right: 10px
    text-decoration: none

    &.router-link-exact-active
      color: #42b983


.blocked
  pointer-events: none
  opacity: 0.5

</style>
