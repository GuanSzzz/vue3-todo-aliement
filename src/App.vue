<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main
      >Main
      <el-button size="medium"> 登 录 </el-button>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  <hr />

  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main
        >Main
        <div v-if="comp == 'form'">
          <el-form ref="myForm" :model="model" :rules="rules">
            <el-form-item label="用户名：" prop="username">
              <el-input v-model="model.username" />
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="model.password" type="password" />
            </el-form-item>
            <br />
            <el-form-item>
              <el-button type="primary" @click="login"> 登 录 </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
  </el-container>
  <hr />
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div>
          <el-button @click="showDialog = true"> open弹窗 </el-button>
          <el-dialog v-if="showDialog">
            <iframe
              src="//player.bilibili.com/player.html?aid=673762230&bvid=BV1pU4y1G7VX&cid=358701287&page=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            />
            <el-button @click="showDialog = false"> close弹窗 </el-button>
          </el-dialog>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import ElButton from "./components/button/Button.vue";
import ElDialog from "./components/dialog/Dialog.vue";
import { ref, reactive } from "vue";
const comp = ref("form");
import { FormType } from "./components/form/type";

const model = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  username: [
    {
      required: true,
      message: "请输入用户名！",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码！",
    },
  ],
});

// 获取表单实例
const myForm = ref<FormType>();
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model);
    } else {
      alert("请正确填写表单！");
    }
  });
};

// 控制弹窗显隐
const showDialog = ref<boolean>(false);
</script>

<style>
body {
  width: 1000px;
  margin: 10px auto;
}
/* .el-header,
   .el-footer {
     设置额外的css样式
   } */
</style>
