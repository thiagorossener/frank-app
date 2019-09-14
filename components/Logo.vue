<template>
  <h1 class="logo" :class="isLight ? 'logo--dark' : 'logo--light'">Frankenstein</h1>
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
  font-size: 40px;
  text-transform: uppercase;
}

.logo--light {
  color: #fff;
}

.logo--dark {
  color: #000;
}
</style>
