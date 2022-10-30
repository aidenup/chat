import { defineStore } from 'pinia'

type Panel = 'msg' | 'addressBook'

const menuStore = defineStore({
  id: 'store',
  state: () => {
    return {
      panelType: 'msg' as Panel
    }
  },
  getters: {

  },
  actions: {
    changePanelType(panelType: Panel) {
      this.panelType = panelType
    }
  }
})

export default menuStore