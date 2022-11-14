<!-- 消息组件 -->
<script setup lang="ts">

const props = defineProps<{
  active: boolean
}>()

</script>
<template>
  
  <div class="message_list_item" :class="{active: props.active}">
    <div class="avatar"><img src="" /></div>
    <div class="info">
      <div>
        <p>user_name</p><span>time</span>
      </div>
      <div class="short_message">hello world</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.message_list_item {
  position: relative;
  padding: 10px 15px;
  align-items: center;
  display: flex;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
  }

  .avatar {
    margin-right: 12px;

    img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid rgba($color: #000000, $alpha: .5);
    }
  }

  .info {
    flex: 1;

    div {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 18px;
        font-weight: 600;
      }

      span {
        color: #666;
      }
    }

    .short_message {
      font-size: 14px;
      margin-top: 5px;
      color: #333;
    }
  }
}

.active {
  background-color: rgb(231, 242, 255);
}
</style>