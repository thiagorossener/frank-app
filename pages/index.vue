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
    <div class="frame"></div>
  </div>
</template>

<script>
import Logo from '../components/Logo'
import MoviesList from '../components/MoviesList'
import SwitchButton from '../components/SwitchButton'

export default {
  head: {
    title: 'Frank\'s Website'
  },
  components: {
    SwitchButton,
    MoviesList,
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

<style>
.index .frame {
  position: absolute;
  width: 600px;
  height: 300px;
  background-color: red;
  top: 0;
  left: 0;
  transition: all 1s;
}
</style>
