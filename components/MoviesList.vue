<template>
  <ul class="movies-list" :class="isLight ? 'movies-list--dark' : 'movies-list--light'">
    <li class="movies-list__item" v-for="movie in entries" :key="movie.id">
      <nuxt-link :to="`movie/${movie.id}`">
        {{ movie.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import allMovies from '~/apollo/queries/allMovies'

export default {
  apollo: {
    entries: {
      prefetch: true,
      query: allMovies
    }
  },
  props: {
    isLight: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.movies-list {
  margin: 20px 0;
  min-width: 400px;
}

.movies-list--light {
  .movies-list__item a {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
}

.movies-list--dark {
  .movies-list__item a {
    color: #000;
    border-bottom: 2px solid #000;
  }
}

  .movies-list__item a {
    display: block;
    font-weight: bold;
    text-decoration: none;
    padding: 5px 0;
    margin: 10px 0;

    &:hover {
      color: #1dc278;
      border-color: #1dc278;
    }
  }
</style>
