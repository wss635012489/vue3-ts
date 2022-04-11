<template>
  <div>
    <div class="top">
      <van-image
        round
        width="1.6rem"
        height="1.6rem"
        src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <div class="name">德玛西亚</div>
    </div>
    <div class="cell">
      <van-cell title="订单" is-link value="查看" />
      <van-cell title="购物车" is-link value="查看" />
      <van-cell title="退出" />
    </div>
  </div>
  <my-table-bar></my-table-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.top {
  padding-top: 20px;
  text-align: center;
  .name {
    font-size: 20px;
    color: red;
  }
}
.cell {
  margin-top: 30px;
}
</style>