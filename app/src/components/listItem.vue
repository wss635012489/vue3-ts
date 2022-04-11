<template>
  <ul class="ul">
    <li v-for="(item, index) in list" :key="index">
      <img :src="item.imgUrl" alt="" />
      <div>
        {{ item.title }}
      </div>
      <div class="des">
        <span>{{ item.author }}</span
        ><span>{{ item.scNumber }}浏览</span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
    let list = inject('list')
    return { list }
  },
})
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-top: 0;
  li {
    background-color: #fff;
    width: 50%;
    margin-top: 10px;
    font-size: 14px;
    &:nth-child(2n) {
      padding-left: 5px;
    }
    &:nth-child(2n -1) {
      padding-right: 5px;
    }
    img {
      width: 100%;
    }
    .des {
      display: flex;
      justify-content: space-between;
      color: #999;
      font-size: 12px;
    }
  }
}
</style>