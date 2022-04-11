<template>
  <div class="box">
    <van-swipe
      :autoplay="3000"
      lazy-render
      class="my-swiper"
      v-if="list.length"
    >
      <van-swipe-item v-for="item in banners" :key="item.imgUrl">
        <img :src="item.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <div>
      <list-item></list-item>
    </div>
    <my-table-bar></my-table-bar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, reactive } from 'vue'
import { getList } from '@/api/http'
import listItem from '@/components/listItem.vue'
interface State {
  list: IlistImte[]
  banners: string[]
}
interface IlistImte {
  imgUrl: string
  title: string
  author: string
  scNumber: number
}
export default defineComponent({
  components: { listItem },
  setup() {
    const state: State = reactive({
      list: [],
      banners: [],
    })
    provide(
      'list',
      computed(() => state.list)
    )
    const getListData = (): void => {
      getList().then((res) => {
        //console.log(res)
        var arr = JSON.parse(JSON.stringify(res))
        state.list = arr
        state.banners = arr.slice(0, 4)
      })
    }
    onMounted(() => {
      getListData()
    })
    return state
  },
})
</script>

<style lang="scss" scoped>
.box {
  padding-bottom: 45px;
  .my-swiper {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }
}
</style>