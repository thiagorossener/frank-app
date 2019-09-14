<template>
  <div class="container" v-if="entries && entries.length">
    <div class="content">
      <h3>{{ entries[0].title }}</h3>
      <p>{{ entries[0].description }}</p>
      <p>
        <nuxt-link to="/" class="link">
          Home page
        </nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
import movie from '~/apollo/queries/movie'

export default {
  apollo: {
    entries: {
      query: movie,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables () {
        return { id: this.$route.params.id }
      }
    }
  },
  head () {
    return {
      title: (this.entries && this.entries.length ? `${this.entries[0].title}` : 'Loading...')
    }
  },
  transition() {
    return {
      name: 'slide',
      mode: ''
    }
  }
}
</script>

<style>
.link {
  display: inline-block;
  margin-top: 40px;
}
</style>
