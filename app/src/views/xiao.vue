<template>
  <div>
    <van-search placeholder="请输入搜索关键词" @input="search()" v-model="value" />
    <van-card
      v-for="(item,index) in arr"
      :key="index"
      num="2"
      :price="item.xiaoxi"
      :title="item.name"
      thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
    />
  </div>
</template>
<script>
import datalist from "../../public/data.json";
export default {
  data() {
    return {
      arr: datalist,
      value: ""
    };
  },
  methods: {
    search() {
      console.log(datalist);
      this.arr = datalist.filter((item, index) => {
        return item.name.includes(this.value);
      });
    }
  }
};
</script>