<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="routerLink in routerLinks" :to="routerLink.to" :key="routerLink.to">
          <p>{{routerLink.name}}</p>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {rebuildRouterPath} from './router';
export default {
    name: 'App',
    data(){
       return {
           routerLinks: [{
               to: rebuildRouterPath("/"),
               name: "Home"
           },{
               to: rebuildRouterPath("/about"),
               name: "About"
           }]
       }
    },
    components: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
        close() {
            console.log('close');
        },
    },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
