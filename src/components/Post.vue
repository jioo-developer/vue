<template>
  <div class="post">
    <div class="post-header">
      <img :src="postData.userImage" alt="" class="profile" />
      <span class="profile-name">{{ postData.name }}</span>
    </div>
    <figure
      class="post-body"
      :style="{ backgroundImage: `url(${postData.postImage})` }"
      :class="postData.filter"
    ></figure>
    <div class="post-content">
      <p class="like">likes : {{ postData.likes }}</p>
      <p class="content">{{ postData.content }}</p>
      <p class="date">{{ postData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "post",
  props: {
    postData: Array,
  },
};
</script>

<style>
@import "../assets/css/post.css";
</style>