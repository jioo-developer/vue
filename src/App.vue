<template>
  <fragment>
    <header>
      <button class="btn" v-if="step > 0" @click="step--">cencel</button>
      <img src="./assets/Instagram-Logo.svg" class="logo" />
      <button class="btn" @click="step++" v-if="step == 1">next</button>
      <button class="btn" @click="publish" v-if="step == 2">Publish</button>
    </header>
    <div v-if="step == 0">
      <Post v-for="(a, i) in posting" :key="i" :postData="a" />
    </div>
    <div class="more" @click="more" v-if="step == 0">more</div>
    <footer v-if="step == 0">
      <ul class="upload">
        <input type="file" @change="upload" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </footer>
    <Upload
      v-if="step > 0"
      :step="step"
      @Newcontent="내용받을곳 = $event"
      :image="image"
    />
    <!-- @요청이벤트명 =받을곳 = "요청사항" -->
  </fragment>
</template>

<script>
import Post from "./components/Post.vue";
import axios from "axios";
import Upload from "./components/Upload.vue";
import Data from "./data";
export default {
  name: "App",
  data() {
    return {
      posting: Data,
      mores: 0,
      step: 0,
      nowDate: new Date(),
      내용받을곳: "",
      image: "",
    };
  },
  components: {
    Post,
    Upload,
  },
  methods: {
    more() {
      if (this.mores < 2) {
        axios
          .get(`https://codingapple1.github.io/vue/more${this.mores}.json`)
          .then((결과) => {
            this.posting.push(결과.data);
            this.mores++;
          });
      }
    },
    upload(e) {
      let img = e.target.files[0];
      let url = URL.createObjectURL(img);
      this.step++;
      this.image = url;
      //함수안의 url을 props로 줄 순 없으니 image라는 담을 변수를 만들어서 연결
      if (this.step == 1) {
        document
          .querySelector("header")
          .setAttribute("style", "justify-content:space-between");
      }
      this.$store.commit("choice", "");
    },
    publish() {
      let month = this.nowDate.getMonth() + 1;
      let day = this.nowDate.getDate();
      let 내게시물 = {
        name: "tester",
        userImage: "http://rlawlgh3687.dothome.co.kr/default.svg",
        postImage: this.image,
        likes: 0,
        date: `${month}월${day}일`,
        liked: false,
        content: this.내용받을곳,
        filter: this.$store.state.select,
      };
      this.posting.unshift(내게시물);
      this.step = 0;
      document
        .querySelector("header")
        .setAttribute("style", "justify-content:space-center");
    },
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
