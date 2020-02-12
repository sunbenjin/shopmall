<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!active" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabbarItem",
  data() {
    return {};
  },
  props: {
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    active() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.active ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style>
    .tab-bar-item{
        flex:1;
        text-align:center;
        height:49px;
        font-size: 14px;

    }
    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
</style>