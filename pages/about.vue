<template>
  <div class="container about">
    <div class="content">
      <h1>About page</h1>
      <NuxtLink to="/">
        Home page
      </NuxtLink>
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
</style>
