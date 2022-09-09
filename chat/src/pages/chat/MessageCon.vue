<script setup lang="ts">

</script>
<template>
  <div>
    <div class="header">
      <div class="left">
        <div class="avatar"><img src="" /></div>
        <div class="info">
          <div>
            <p>user_name</p>
          </div>
          <div class="short_message">hello world</div>
        </div>
      </div>
      <div class="right">
        <ul class="fun_list">
          <li>O</li>
          <li>O</li>
          <li>O</li>
          <li>O</li>
        </ul>
      </div>
    </div>
    <div class="message_content">
      message_content
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 50px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: .1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
  .avatar {
    margin-right: 12px;

    img {
      width: 30px;
      height: 30px;
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
      color: #333;
    }
  }
}
.right {
  .fun_list {
    display: flex;
    li {
      margin-left: 10px;
    }
  }
}
</style>