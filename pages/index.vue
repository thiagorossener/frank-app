<template>
  <div class="container index">
    <div class="content">
      <h1>Movies</h1>
      <ul>
        <li v-for="movie in entries" :key="movie.id">
          <NuxtLink :to="`movie/${movie.id}`">
            {{ movie.dateCreated }} {{ movie.title }}
          </NuxtLink>
        </li>
      </ul>
      <p>
        <NuxtLink to="/about">
          About page
        </NuxtLink>
      </p>
    </div>
    <div class="frame"></div>
  </div>
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
  head: {
    title: 'Movies with Apollo'
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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #3498DB;
}

a:hover {
  border-bottom: 1px solid;
}

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
