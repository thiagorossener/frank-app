<template>
  <div class="logo">
    <img src="~/assets/imgs/frank.svg" width="80">
    <h1 class="logo__text" :class="isLight ? 'logo__text--dark' : 'logo__text--light'">Frank's</h1>
  </div>
</template>

<script>
export default {
  props: {
    isLight: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
.logo {
  text-align: center;
}

.logo__text {
  font-size: 40px;
  text-transform: uppercase;
}

.logo__text--light {
  color: #fff;
}

.logo__text--dark {
  color: #000;
}
</style>
