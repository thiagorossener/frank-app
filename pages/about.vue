<template>
  <div class="container about">
    <div class="content">
      <h1>About</h1>
      <p>This is an experimental website, nothing else.</p>
      <nuxt-link to="/" class="link">
        Home page
      </nuxt-link>
    </div>
    <div class="frame"></div>
  </div>
</template>

<script>
export default {
  transition() {
    return {
      name: 'slide',
      mode: ''
    }
  }
}
</script>

<style>
.about .frame {
  width: 400px;
  height: 400px;
  background-color: blue;
  position: absolute;
  bottom: 0;
  right: 0;
  transition: all 1s;
}

.link {
  display: inline-block;
  margin-top: 40px;
}
</style>
