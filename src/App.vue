<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Flicking 
      :options="{ circular: true, renderOnlyVisible: true }"
      >
      
      <img :src="banner.image.url" :alt="banner.image.alt" class="banner-image" />
    </Flicking>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Flicking } from '@egjs/vue-flicking';
import mockResponse from '@/components/mockBanners';

export default {
  name: 'App',
  data() {
    return {
      banners: mockResponse
    }
  },
  components: {
    HelloWorld,
    Flicking
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
