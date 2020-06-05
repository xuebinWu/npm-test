import Vue from 'vue'
import TopBar from './TopBar.vue'
import TitleWrapper from './TitleWrapper.vue'
const Components = {
  TopBar,
  TitleWrapper
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components