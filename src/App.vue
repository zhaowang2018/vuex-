<template>
  <div id="app">
    <h2 class='title'>黑马买买买-商城
      <p>
        <router-link to="/index" >主页</router-link>
        <router-link to='/cart' >购物车({{$store.getters.totalNum}})</router-link>
      </p>
    </h2>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  methods: {

  },
  
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.title{
  margin-top: 0;
  height: 200px;
  font-size:100px;
  font-weight: 900;
  background-color: hotpink;
  color:white;
}
.title p{
  font-size:20px;
}
.title p a{
  margin-right: 20px;
}

</style>
