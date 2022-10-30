<!-- 创建群聊 -->
<script lang="ts" setup>
import { Api } from "@/api-adapter"
import { ElMessage } from "element-plus";
import { reactive } from "vue";

const emit = defineEmits<{
  (e: 'onCreate'): void
}>()

const groupInfo = reactive({
  group_name: '',
  create_time: ''
})
const createGroup = () => {
  if(groupInfo.group_name === '') {
    ElMessage.closeAll()
    ElMessage.warning('请输入群名称')
    return
  }
  groupInfo.create_time = new Date().toString()
  Api.createGroup(groupInfo).then(res=> {
    if(res.code === 200) {
      ElMessage.success('创建成功')
      setTimeout(() => {
        ElMessage.closeAll()
        emit('onCreate')
      }, 1000);
    } else {
      ElMessage.warning('创建失败')
    }
  })

}
</script>
<template>
  <div class="create_group">
    <div class="from_box">
      <el-form :model="groupInfo">
        <el-form-item label="群名称">
          <el-input v-model="groupInfo.group_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createGroup">立即创建</el-button>
          <el-button @click="emit('onCreate')">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.create_group {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: .2);
  .from_box {
    padding: 15px;
    border-radius: 5px;
    width: 300px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>