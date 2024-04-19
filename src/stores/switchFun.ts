import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSwitchFun = defineStore('switchFun', {
  state: () => ({ 
    isFun: ref(false)
  }),
  getters: {
    getFun: (state) => state.isFun,
  },
  actions: {
    setIsFun(value: boolean) {
      this.isFun = value;
      console.log(this.isFun)
  },
  },
})
