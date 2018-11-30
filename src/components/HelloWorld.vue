<template>
  <div class="hello">
    <div>
      <span>输入国家名称(模糊查询)</span><input v-model="countryName" type="text" placeholder="请输入国家"><span>每页十条输入页数</span> <input v-model="pageNum" type="text">
      <div @click="getCountry($event)">
        点击获取国家列表
      </div>
      <div>
        <div class="depart_line" v-for="(item, index) in countryList" :key="index">
          <p v-bind:key="indexInner" v-for="(itemInner, indexInner) in item">{{indexInner}}:{{itemInner}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

import qs from 'qs'

let Axios = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default {
  name: 'HelloWorld',
  data () {
    return {
      countryName: '',
      pageNum: 1,
      countryList: []
    }
  },
  props: {
    msg: String
  },
  methods: {
    getCountry ($event) {
      var that = this
      Axios.post('/getlist', qs.stringify({
        countryName: this.countryName,
        pageNum: this.pageNum - 1
      })).then((res) => {
        console.log(res)
        if (res.data.returncode === 0) {
          console.log(res.data)
          that.countryList = res.data.data
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.depart_line{
  border-bottom: solid 1px red;
}
</style>
