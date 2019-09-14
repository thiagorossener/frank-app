<template>
  <div class="container" v-if="entries && entries.length">
    <div class="content">
      <h3 class="title">{{ entries[0].title }}</h3>

      <p class="description">{{ entries[0].description }}</p>

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
      prefetch: ({ route }) => ({ slug: route.params.slug }),
      variables () {
        return { slug: this.$route.params.slug }
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
.title {
  text-align: center;
}

.description {
  text-align: center;
  margin: 20px 0;
}

.link {
  display: inline-block;
  margin-top: 40px;
}
</style>
