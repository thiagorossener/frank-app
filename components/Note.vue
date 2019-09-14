<template>
  <div class="note">
    <div class="note__circle"></div>
    <div class="note__text">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.note {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 300px;
  overflow: hidden;
  transition: all 1s;
  z-index: 1;
}

.note__circle {
  width: 600px;
  height: 600px;
  border-radius: 50%;
  border: 4px solid #000;
  background-color: #fff;
}

.note__text {
  position: absolute;
  width: 150px;
  right: 40px;
  bottom: 40px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  text-align: right;
  z-index: 3;
}

.slide-enter, .slide-leave-active {
  .note {
    transform: translate3d(100%, 100%, 0);
  }
}
</style>
