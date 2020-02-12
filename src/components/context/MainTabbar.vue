<template>
  <tabbar>
    <tabbarItem path="/home" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/home.jpg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/home-active.jpg" />
      <div slot="item-text">首页</div>
    </tabbarItem>
    <tabbarItem path="/category" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/category.jpg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/category-active.jpg" />
      <div slot="item-text">分类</div>
    </tabbarItem>
    <tabbarItem path="/cart" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/cart.jpg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/cart-active.jpg" />
      <div slot="item-text">购物车</div>
    </tabbarItem>
    <tabbarItem path="/profile" activeColor="blue">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.jpg" />
      <img slot="item-icon-active" src="../../assets/img/tabbar/profile-active.jpg" />
      <div slot="item-text">我的</div>
    </tabbarItem>
  </tabbar>
</template>
<script>
import TabbarItem from "../common/tabbar/TabbarItem";
import Tabbar from "../common/tabbar/Tabbar";

export default {
  name: "MainTabbar",
  components: {
    tabbarItem: TabbarItem,
    tabbar: Tabbar
  }
};
</script>