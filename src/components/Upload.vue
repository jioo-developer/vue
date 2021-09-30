<template>
  <fragment>
    <section v-if="step == 1">
      <figure
        class="upload-image"
        :class="$store.state.select"
        :style="{ backgroundImage: `url(${image})` }"
      ></figure>
      <div class="filter-wrap">
        <div class="filter-item" v-for="(a, i) in $store.state.필터들" :key="i">
          <div
            class="filter-object"
            :class="a"
            :style="{ backgroundImage: `url(${image})` }"
            @click="choiceFind"
          ></div>
          <p class="filter-name">{{ a }}</p>
        </div>
      </div>
    </section>
    <section v-if="step == 2">
      <figure
        class="upload-image"
        :class="$store.state.select"
        :style="{ backgroundImage: `url(${image})` }"
      ></figure>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('Newcontent', $event.target.value)"
          placeholder="write!"
        ></textarea>
      </div>
    </section>
  </fragment>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      filterData: "",
    };
  },
  props: {
    step: Number,
    image: String,
  },
  methods: {
    choiceFind(e) {
      this.filterData = e.target.nextSibling.innerText;
      this.$store.commit("choice", this.filterData);
    },
  },
};
</script>

<style>
@import "../assets/css/upload.css";
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  background-size: cover;
  background-position: center;
}

.filter-object {
  width: 100%;
  height: 80%;
}
</style>