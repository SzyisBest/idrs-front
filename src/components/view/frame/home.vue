<template>
  <el-container style="height:100%">
    <Head></Head>
    <MainContent/>
    <Footer/>
  </el-container>
</template>

<script>
import Head from "./head";
import Footer from "./footer";
import MainContent from "./mainContent";
export default {
  name: "home",
  components: {MainContent, Footer, Head}
}
</script>

<style scoped>
body{
  padding: 0;
  margin: 0;
}
.self-main{
  height: 600px;
}




</style>