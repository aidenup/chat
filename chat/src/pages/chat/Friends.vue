<script setup lang="ts">

</script>
<template>
  <div class="firends">
    <ul class="firend-list">
      <li class="firend-item">firend1.</li>
      <li class="firend-item">firend1.</li>
      <li class="firend-item">firend1.</li>
      <li class="firend-item">firend1.</li>
    </ul>  
  </div>
</template>
<style lang="scss">
.firends {
  width: 300px;
  background-color: #fff;
  height: 100vh;
  padding: 20px 15px;
  .firend-list {

    .firend-item {
      border: 1px solid rgba($color: #000000, $alpha: .05);
      padding: 10px 20px;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 10px 10px 20px -5px rgba($color: #000000, $alpha: .05);
      cursor: pointer;
    }
  }
}
</style>