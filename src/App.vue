<template>
  <div id="app">
    <Echarts/>
  </div>
</template>

<script>
import Echarts from './components/Echarts'
export default {
  name: 'App',
  components: {
    Echarts
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
