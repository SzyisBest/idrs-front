<!-- 这个是模板  所有html 代码 和 css内嵌样式 写在这个里面 这个里面只能有一个大层容器 -->
<template>
  <div>
    <div>
      <span> {{ myName }} </span>
    </div>

  </div>
</template>

<!-- 这里写js  -->
<script>
export default {
  name: "hello_world",
  data() {
    return {
      // 变量
      myName: '因双眼'
    }
  }
}
</script>

<!-- zheli xie css -->
<style scoped>

</style>