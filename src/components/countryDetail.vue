<template>
  <div>
    <div @click="fetchData($event)">
      点击发送post请求
    </div>
  </div>
</template>

<script>

// 引入axios实例
import $axios from '@/fetch/index'
console.log('here', $axios)
export default {
  name: 'worldDetail',
  methods: {
    fetchData (event) {

    }
  }
}
</script>

<style scoped>

</style>
