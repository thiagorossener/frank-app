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

<style lang="scss">
.switch-button {
  background-color: #fff;
  border: 2px solid #000;
  outline-color: #1dc278;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  margin: 40px 0;
  cursor: pointer;

  &:hover {
    border-color: #1dc278;
    color: #1dc278;
  }
}
</style>
