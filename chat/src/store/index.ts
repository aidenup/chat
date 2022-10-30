import menuStore from "./modules/menu"

export default function useStore() {
  return {
    menuStore: menuStore()
  }
}