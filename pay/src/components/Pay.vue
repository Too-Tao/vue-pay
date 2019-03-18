<template>
  <div>
    <div class="mask"></div>
    <div class="content">
      <div class="downPull border-bottom"></div>
      <div class="password"></div>
      <div class="keyboard">
        <div class="keyboard-top"></div>
        <div class="keyboard-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pay'
}
</script>

<style scoped>
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .4);
    z-index: 99;
  }
  .content {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: white;
    z-index: 100;
  }
  .downPull {
    width: 100%;
    height: 10%;
    background: #eeeeee;
    
  }
</style>
