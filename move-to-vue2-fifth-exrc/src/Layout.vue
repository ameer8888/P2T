<template>
  <div id="app">
        <navbar></navbar>
        <div class="container">
            <upload v-if='!isUploaded' @uploaded="setText"></upload>
            <result v-if='isUploaded' :text='currtext' ></result>
            <button @click="setStatus(false)" v-if='isUploaded'>העלה תמונה אחרת</button>
        </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import upload from './components/upload.vue';
import result from './components/result.vue';
import {mapState,mapActions} from 'vuex';

export default {
    data() {
        return {
            currtext:'hey',
        }
    },
    computed:{
        ...mapState(['isUploaded']),
    },
    methods:{
        ...mapActions(['setStatus']),
        setText(text){
            this.currtext=text;
        },
        
    },
    name: 'layout',
    components: { Navbar, upload,result}
}
</script>

