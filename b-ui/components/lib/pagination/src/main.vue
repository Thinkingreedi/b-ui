<template>
  <div class="m-pagination">
    <button :disabled = "pageNo == 1" @click = "$emit('getPageInfo',pageNo-1)">上一页</button>
    <button v-show="startNumAndEndNum.start > 1" @click = "$emit('getPageInfo',1)" :class = "{active:pageNo == 1}">1</button>
    <span v-show="startNumAndEndNum.start > 2">···</span>

    <!-- 渲染startNumAndEndNum.end，将所有页面遍历出来，然后通过v-if进行条件判断是否显示 -->
    <!-- v-for与v-if一起使用会在每次重新渲染时仍然消耗大量资源去循环不显示的数据，因此用计算属性来避免可以提高性能 -->
    <button v-for="(item, index) in isShowPage" :key="index" @click = "$emit('getPageInfo',item)" :class = "{active:pageNo == item}">{{ item }}</button>

    <span v-show="startNumAndEndNum.end < totalPage - 1" >···</span>
    <button v-show="startNumAndEndNum.end < totalPage"  @click = "$emit('getPageInfo',totalPage)" :class = "{active:pageNo == totalPage}">{{totalPage}}</button>
    <button :disabled = "pageNo == totalPage" @click = "$emit('getPageInfo',pageNo+1)">下一页</button>

    <button style="margin-left: 30px" @click = "$emit('getPageInfo',totalPage)">共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "b-pagination",
  // props: ["page-No", "pageSize", "total", "continues"],
  props:{
    pageNo:{
      type:Number,
      required:true
    },
    pageSize:{
      type:Number,
      default:10
    },
    total:{
      type:Number,
      required:true
    },
    continues:{
      type:Number,
      default:5
    },
    
  },
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      let start = 0,
        end = 0;
      if (this.totalPage <= this.comtinues) {
        start = 1;
        end = this.totalPage;
      } else {
        start = this.pageNo - Math.floor(this.continues / 2);
        end = this.pageNo + Math.floor(this.continues / 2);
      }
      //纠正不正常的start（start=0或者为负数）与end（超过totalPage）
      if (start < 1) {
        start = 1;
        end = this.continues;
      }
      if (end > this.totalPage) {
        start = this.totalPage - this.continues + 1;
        end = this.totalPage;
      }
      return { start, end };
    },
    isShowPage() {
      let showArr = [];
      for (
        let i = this.startNumAndEndNum.start;
        i <= this.startNumAndEndNum.end;
        i++
      ) {
        showArr.push(i);
      }
      return showArr;
    },
  },
};
</script>

<style >

</style>
