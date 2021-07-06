<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>here!!</h1>
    <Flicking 
      v-if="images.length"
      :options="{ circular: true, renderOnlyVisible: true }"
      >
      
      <img v-for="banner in images" :key="banner.id" :src="banner.image.url" :alt="banner.image.alt" class="banner-image" />
    </Flicking>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mockResponse from '@/components/mockBanners';

export default {
  name: 'App',
  data() {
    return {
      bannersData: mockResponse
    }
  },
  computed: {
    banners() {
      return this.bannersData.data
    },
    images() {
      return this.banners.images
    }
  },
  components: {
    HelloWorld
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
