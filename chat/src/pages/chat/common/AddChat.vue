<script setup lang="ts">

const emit = defineEmits(["onChange"]);

const onChange = () => {
  emit("onChange")
}
</script>
<template>
  <div class="add_chat">
    <div class="content">
      adsfass
      <button @click="onChange">确定</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.add_chat {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: .3);
  z-index: 9;
  .content {
    background-color: #fff;
    width: 40%;
    height: 40%;
    margin: 10% auto;
  }
}
</style>