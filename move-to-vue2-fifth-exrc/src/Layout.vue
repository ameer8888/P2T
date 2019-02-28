<template>
  <div id="app" style="padding-top:20px">
        <div class="container">
            <div id="flow">
                <span class="flow-1"></span>
                <span class="flow-2"></span>
                <span class="flow-3"></span>
            </div>
        </div>

        <navbar></navbar>

        <div class="home-columns columns">
            <div class="column is-half is-home-left-column" style="background-color:lightgray">
                <label v-if="!isRecord" @click="isRecord=true"><i class="fa fa-microphone"></i></label>
                <record v-else></record>
            </div>
            <div class="column is-home-right-column" style="background-color:lightgray">
                <label v-if="!isUpload" @click="isUpload=true"><i class="fa fa-image"></i></label>
            </div>
            <upload v-if='!isUploaded' @uploaded="setText"></upload>
            <result v-if='isUploaded' :text='currtext' ></result>
            <button @click="setStatus(false)" v-if='isUploaded'>העלה תמונה אחרת</button>
        </div>


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import record from './components/record.vue';
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
    components: { Navbar, record, upload,result},

    data () {
        return {
            isRecord : false,
            isUpload : false, 
        }
    }, 

}
</script>
<style>
.column {
    height: 900px!important;
}
label {
    font-size: 320px;
    margin-top: 250px;
    margin-left: 350px;
}
/*
.card {overflow:hidden}
.card.large {
height: 600px;
-webkit-backface-visibility: hidden;
backface-visibility: initial;
border-radius: 5px;
}
.media-content {
overflow: hidden;
}
.title.no-padding {
margin-bottom: 0 !important;
}
#flow span {
display: block;
width: 200vw;
height: 200vw;
position: absolute;
top: -180vw;
left: -50vw;
border-radius: 90vw;
opacity: 0.6;
}
.flow-1 {
background: #3281ff;
-webkit-animation: rotating 20s linear infinite;
-moz-animation: rotating 20s linear infinite;
-ms-animation: rotating 20s linear infinite;
-o-animation: rotating 20s linear infinite;
animation: rotating 20s linear infinite;
}
.flow-2 {
background: #f442ee;
position: absolute;
-webkit-animation: rotating 15s linear infinite;
-moz-animation: rotating 15s linear infinite;
-ms-animation: rotating 15s linear infinite;
-o-animation: rotating 15s linear infinite;
animation: rotating 15s linear infinite;
}
.flow-3 {
background: #42eef4;
position: absolute;
-webkit-animation: rotating 7s linear infinite;
-moz-animation: rotating 7s linear infinite;
-ms-animation: rotating 7s linear infinite;
-o-animation: rotating 7s linear infinite;
animation: rotating 7s linear infinite;
}
@-webkit-keyframes rotating {
from {
-ms-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-webkit-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
}
to {
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-o-transform: rotate(360deg);
transform: rotate(360deg);
}
}
@keyframes rotating {
from {
-ms-transform: rotate(0deg);
-moz-transform: rotate(0deg);
-webkit-transform: rotate(0deg);
-o-transform: rotate(0deg);
transform: rotate(0deg);
}
to {
-ms-transform: rotate(360deg);
-moz-transform: rotate(360deg);
-webkit-transform: rotate(360deg);
-o-transform: rotate(360deg);
transform: rotate(360deg);
}
}
.rotating {
-webkit-animation: rotating 2s linear infinite;
-moz-animation: rotating 2s linear infinite;
-ms-animation: rotating 2s linear infinite;
-o-animation: rotating 2s linear infinite;
animation: rotating 2s linear infinite;
}
.footer{
background-color: #222831;
color: lemonchiffon;
}
.footer p, strong
{color: lemonchiffon}
.footer a:hover
{color: crimson;}
.fa
{color: lemonchiffon;
    margin: 10px} */

</style>

