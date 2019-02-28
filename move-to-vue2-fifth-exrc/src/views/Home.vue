<template>
    <div id="home">

        <record></record>
        
    </div>
</template>

<script>
import axios from 'axios';
import record from '../components/record.vue';
import { mapState } from 'vuex';

export default {
  name: 'home',
  components: {record },
  data () {
    return {
        search: ''
    }
  },

  }
</script>

<style>
body {
background: #041221;
}
</style>
