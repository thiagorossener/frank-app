<template>
  <button class="switch-button" @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Switch Button'
    }
  }
}
</script>

<style>
.switch-button {
  background-color: #fff;
  border: 2px solid #000;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  margin: 40px 0;
  cursor: pointer;
}
</style>
