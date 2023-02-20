<template>
  <div id="app">
    <!-- demo组件展示测试 -->
    <b-demo />
    <hr />
    <!-- card组件展示测试 -->
    <div class="b-carb-container">
      <b-card imgSrc="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" summary="翻转组件库搭建全流程"
        :width="370" :imgHeight="152">
        本课程旨在帮助你如何快速搭建一个组件库
        <template v-slot:footer>
          <div class="footer-spring">
            <div class="level">作者 . 花又开</div>
            <div class="price">英文.linda</div>
          </div>
        </template>
      </b-card>
    </div>
    <hr />
    <!-- icon组件展示测试 -->
    <div>
      <b-icon name="ningmeng"></b-icon>
      <b-icon name="download"></b-icon>
      <b-icon name="down"></b-icon>
      <b-icon name="thumbs-up"></b-icon>
      <b-icon name="dianzan"></b-icon>
    </div>
    <hr />
    <!-- button组件展示测试 -->
    <div>
      <b-button type="primary" @click="handleClick">primary</b-button>
      <b-button type="success" round>success</b-button>
      <b-button type="warning" disabled>warning</b-button>
      <b-button type="danger" @click="handleClick">danger</b-button>
    </div>
    <hr />
    <!-- radio组件展示测试 -->
    <div>
      <b-radio-group v-model="group_sex">
        <b-radio label="男人">男人</b-radio>
        <b-radio label="女人">女人</b-radio>
        <b-radio label="其他人">其他人</b-radio>
      </b-radio-group>
      <h1>{{ group_sex }}</h1>
    </div>
    <hr />
    <!-- checkbox组件展示测试 -->
    <div>
      <b-checkbox-group v-model="hobby">
        <b-checkbox label="篮球">篮球</b-checkbox>
        <b-checkbox label="足球">足球</b-checkbox>
        <b-checkbox label="乒乓球">乒乓球</b-checkbox>
      </b-checkbox-group>
      <p>您选择的爱好是:{{ hobby }}</p>
    </div>
    <hr />
    <!-- input组件展示测试 -->
    <div>
      <b-input value="默认输入框"></b-input>
      <b-input value="禁用输入框" disabled></b-input>
      <b-input value="只读输入框" readonly></b-input>
      <b-input value="错误信息" error="错误信息"></b-input>
    </div>
    <hr />
    <!-- form组件展示测试 -->
    <b-form :model="form" label-width="80px">
      <b-form-item label="用户名">
        <b-input :value="form.name"></b-input>
      </b-form-item>
      <b-form-item label="邮箱">
        <b-input :value="form.email"></b-input>
      </b-form-item>
    </b-form>
    <hr />
    <!-- pagination组件展示测试 -->
    <b-pagination :total=total :pageNo=pageNo @getPageInfo="getPageInfo" />
    <hr />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hobby: ["足球"],
      checked: true,
      group_sex: "男人",
      form: {
        name: 'test',
        email: 'test@mail.com',
        labelwidth: '80px'
      },
      //当前页面
      pageNo: 1,
      //必传参数total
      total: 1000
    };
  },
  methods: {
    handleClick() {
      alert("test");
    },
    getPageInfo(pageNo) {
      this.pageNo = pageNo
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.b-carb-container {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>