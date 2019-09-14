<template>
  <div class="container about">
    <div class="content">

      <h1>About</h1>

      <p class="description">Frank is a website made out of Nuxt.js that uses Apollo to fetch data with GraphQL from a headless Craft CMS. Ufhh!</p>

      <nuxt-link to="/" class="link">
        Home page
      </nuxt-link>

    </div>

    <note>This is just a note created to show the simultaneous animation alongside the notification bar</note>
  </div>
</template>

<script>
import Note from '../components/Note'

export default {
  head: {
    title: 'About Frank'
  },
  components: {
    Note
  },
  transition() {
    return {
      name: 'slide',
      mode: ''
    }
  }
}
</script>

<style lang="scss">
.about {
  // .frame {
  //   width: 400px;
  //   height: 400px;
  //   background-color: blue;
  //   position: absolute;
  //   bottom: 0;
  //   right: 0;
  //   transition: all 1s;
  // }

  .description {
    margin: 20px 0;
    text-align: center;
  }

  .link {
    display: inline-block;
    margin-top: 40px;
  }
}
</style>
