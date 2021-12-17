<template>
  <el-container>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
  </el-container>
</template>

<script>
import '../../../../public/css/bootstrap.css'

export default {
  name: "head"
}
</script>

<style scoped>
.self-head{
  height: 200px;
  background-color: bisque;
}

.self-head a{
  font-size: 15px;
  color: #333333;
  text-decoration: none;
}
</style>