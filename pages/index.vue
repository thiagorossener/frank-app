<template>
  <div class="container index" :class="isLight ? 'container--light' : 'container--dark'">
    <div class="content">
      <logo :is-light="isLight"></logo>

      <h2>Movies List</h2>

      <movies-list :is-light="isLight"></movies-list>

      <p>
        <nuxt-link to="/about">About</nuxt-link>
      </p>

      <switch-button @click="isLight = !isLight" :text="isLight ? 'Turn off' : 'Turn on'"></switch-button>
    </div>

    <notification>Aaarrghh! This is a notification</notification>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import MoviesList from '../components/MoviesList'
import Notification from '../components/Notification'
import SwitchButton from '../components/SwitchButton'

export default {
  head: {
    title: 'Frank\'s Website'
  },
  components: {
    SwitchButton,
    MoviesList,
    Notification,
    Logo
  },
  transition() {
    return {
      name: 'slide',
      mode: ''
    }
  },
  data() {
    return {
      isLight: true
    }
  }
}
</script>
