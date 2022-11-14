<!-- 通讯录 -->
<script lang="ts" setup>
import { Api } from '@/api-adapter';
import { ref } from 'vue';

interface GroupList {
  user_id: string
  group_id: string
  group_name: string
}

const activeNames = ref([])  // active 需要记录状态
const groupList = ref<GroupList[]>([] as GroupList[])

const handleChange = (val: string[]) => {
  selectGroup()
}

const selectGroup = () => {
  Api.selectGroupByUserId().then(res => {
    groupList.value = res.data as GroupList[]
  })
}

const goChat = (group_id: string) => {
  
}


</script>
<template>
  <div class="address_book_container">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item
        title="群聊"
        name="1"
      >
        <ul class="group_list">
          <li 
            class="group_item" 
            v-for="item in groupList" 
            :key="item.group_id"
            @click="goChat(item.group_id)">
            {{item.group_name}}
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
  padding: 0 12px;
}
.group_list {
  .group_item {
    border-bottom: 1px solid rgba($color: #000000, $alpha: .05);
    padding: 7px;
    cursor: pointer;
  }
}

</style>
