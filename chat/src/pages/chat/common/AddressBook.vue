<!-- 通讯录 -->
<script lang="ts" setup>
import { Api } from '@/api-adapter';
import { ref } from 'vue';

interface GroupList {
  id: number
  user_id: string
  group_id: string
}

const activeNames = ref([])  // active 需要记录状态
const groupList = ref<GroupList[]>([] as GroupList[])

const handleChange = (val: string[]) => {
  selectGroup()
}

const selectGroup = () => {
  Api.selectByUserId().then(res => {
    console.log(res.data);
    groupList.value = res.data as GroupList[]
  })
}


</script>
<template>
  <div class="address_book_container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        title="群聊"
        name="1"
      >
        <ul>
          <li v-for="item in groupList">
            {{item.id}} {{item.group_id}}
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item
        title="联系人"
        name="2"
      >
       2
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style lang="scss" scoped>
.address_book_container {
  padding: 0 10px;
}
</style> 