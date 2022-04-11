import  'amfe-flexible'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局组件
import { Button,Tabbar, TabbarItem,Toast,Swipe, SwipeItem,Cell, CellGroup ,Image  } from 'vant';
import MyTableBar from './components/MyTableBar.vue'

const app = createApp(App)
app.use(Button).use(Tabbar).use(TabbarItem).use(Toast).use(Swipe).use(SwipeItem).use(Cell).use(CellGroup).use(Image )
app.use(store).use(router)
app.mount('#app')
app.component('my-table-bar', MyTableBar)
