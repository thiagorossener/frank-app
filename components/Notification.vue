<template>
  <div class="notification">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.notification {
  width: 100%;
  background-color: #1dc278;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 50px;
  color: #fff;
  font-size: 20px;
  transition: all 1s;
  z-index: 1;
}

.slide-enter, .slide-leave-active {
  .notification {
    transform: translate3d(0, -100%, 0);
  }
}
</style>
