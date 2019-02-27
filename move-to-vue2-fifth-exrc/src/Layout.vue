<template>
  <div id="app">
        <navbar></navbar>

        <hero></hero>
        <div class="container">
            <record></record>
        </div>
        
        <!--<div class="container">
            <router-view></router-view>
        </div>-->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import record from './components/record.vue';

export default {
    name: 'layout',
    components: { Navbar, Hero, record}
}
</script>

