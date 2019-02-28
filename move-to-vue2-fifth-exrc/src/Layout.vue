<template>
  <div id="app">
            <div class="ct" id="t1">
                <div class="ct" id="t2">
                  <div class="ct" id="t3">
                    <div class="ct" id="t4">
                        <ul id="menu">
                            <a href="#t1"><img src="./img/logo.png"></a><br>
                            <a href="#t2"><img src="./img/P2T.png"></a><br>
                            <a href="#t3"><img src="./img/S2t.png"></a><br>
                            <a href="#t4"><img src="./img/question.png"></a><br>
                        </ul>
                        <div class="page" id="p1">
                                <div class="container">
                                        <div id="flow">
                                            <span class="flow-1"></span>
                                            <span class="flow-2"></span>
                                            <span class="flow-3"></span>
                                        </div>
                                    </div>
                                    
                           <section class="icon"><img src="./img/logoProjWhite.png" style="height: 200px; width: 200px;"><span class="title">Typing made easy...</span></section>  
                        </div>
                        <div class="page" id="p2">
                          <section class="icon fa fa-keyboard-o"><span class="title">Type</span></section>
                        </div>  
                        <div class="page" id="p3">
                          <record></record>
                        </div>
                        <div class="page" id="p4">
                            <div class="container">
                                <h1>About us</h1>
                                <p>text text... blah blah blah</p>
                            </div>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import record from './components/record.vue';

export default {
    name: 'layout',
    components: { Navbar, record},

    data () {
        return {
            isRecord : false,
            isUpload : false, 
        }
    }, 
}
</script>
<style>
img {
    height: 90px;
    width: 90px;
    padding: 10px;
}

.column {
    height: 900px!important;
}
label {
    font-size: 320px;
    margin-top: 250px;
    margin-left: 350px;
}
html, body, .page {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all .6s cubic-bezier(.5, .2, .2, 1.1);
  -webkit-transition: all .6s cubic-bezier(.5, .2, .2, 1.1);
  -moz-transition: all .6s cubic-bezier(.5, .2, .2, 1.1);
  -o-transition: all .6s cubic-bezier(.5, .2, .2, 1.1);  
  color: #fff;
  overflow: hidden; 
}

* {
  font-family: 'open sans', 'lato', 'helvetica', sans-serif;
}

.page {
  position: absolute;
}

#p1 {
  left: 0;
}

#p2, #p3, #p4 {
  left: 200%;
}

#p1 { background: black; }
#p2 { background: rgb(45, 180, 117); }
#p3 { background: rgb(77, 53, 121); }
#p4 { background: rgb(156, 43, 58); }

#t2:target #p2,
#t3:target #p3,
#t4:target #p4,
#t5:target #p5 {
  transform: translateX(-190%);
  -webkit-transform: translateX(-190%);
  -moz-transform: translateX(-190%);
  -o-transform: translateX(-190%);
  transition-delay: .4s !important;
}

#t2:target #p1, 
#t3:target #p1,
#t4:target #p1,
#t5:target #p1{
  background: black;
}

#t2:target #p1 .icon, 
#t3:target #p1 .icon,
#t4:target #p1 .icon,
#t5:target #p1 .icon {
  -webkit-filter: blur(3px);
}

.icon {
  color: #fff;
  display: block;
}

ul img:hover {
  opacity: 0.5;
}

.page .icon .title {
  line-height: 2;
}

#t2:target ul .icon,
#t3:target ul .icon,
#t4:target ul .icon,
#t5:target ul .icon{
  transform: scale(.6);
  -webkit-transform: scale(.6);
  -moz-transform: scale(.6);
  -o-transform: scale(.6);
  transition-delay: .25s;
}

#t2:target #dos,
#t3:target #tres,
#t4:target #cuatro,
#t4:target #cinco {
  transform: scale(1.2) !important;
  -webkit-transform: scale(1.2) !important;
  -moz-transform: scale(1.2) !important;
  -o-transform: scale(1.2) !important;
}

ul {
  position: fixed;
  z-index: 1;
  top: 175px;
  left: 0;
  margin: auto;
  height: 280px;
  width: 10%;
  padding: 0;
  text-align: center;
 }

a {
  text-decoration: none;
}

.title, .hint {
  display: block;
}

.title {
  font-size: 38px;
}

.hint {
  font-size: 20px;
}

#p4 .hint {
  display: inherit !important;
}

.hint a {
  color: yellow;
  transition: all 250ms ease-out;
  -webkit-transition: all 250ms ease-out;
  -moz-transition: all 250ms ease-out;
  -o-transition: all 250ms ease-out;
}

.hint a:hover {
  color: #FFF;
}

.line-trough {
  text-decoration: line-through;
}

.page .icon {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10%;
  left: 0;
  width: 270px;
  height: 170px;
  margin: auto;
  text-align: center;
  font-size: 80px;
  line-height: 1.3;
  transform: translateX(360%);
  -webkit-transform: translateX(360%);
  -moz-transform: translateX(360%);
  -o-transform: translateX(360%);
  transition: all .5s cubic-bezier(.25, 1, .5, 1.25);
  -webkit-transition: all .5s cubic-bezier(.25, 1, .5, 1.25);
  -moz-transition: all .5s cubic-bezier(.25, 1, .5, 1.25);
  -o-transition: all .5s cubic-bezier(.25, 1, .5, 1.25);
}

.page#p1 .icon {
  height: 100px;
}

.page#p1 .icon {
  transform: translateX(10%) !important;
}

#t2:target .page#p2 .icon,
#t3:target .page#p3 .icon,
#t4:target .page#p4 .icon,
#t5:target .page#p5 .icon {
  transform: translateX(0) !important;
  -webkit-transform: translateX(0) !important;
  -moz-transform: translateX(0) !important;
  -o-transform: translateX(0) !important;
  transition-delay: 1s;
}

.media-content {
overflow: hidden;
}

#flow span {
display: block;
width: 200vw;
height: 200vw;
position: absolute;
top: -185vw;
left: -50vw;
border-radius: 90vw;
opacity: 0.6;
}
.flow-1 {
background: rgb(77, 53, 121);
-webkit-animation: rotating 20s linear infinite;
-moz-animation: rotating 20s linear infinite;
-ms-animation: rotating 20s linear infinite;
-o-animation: rotating 20s linear infinite;
animation: rotating 20s linear infinite;
}
.flow-2 {
background: darkorange;
position: absolute;
-webkit-animation: rotating 15s linear infinite;
-moz-animation: rotating 15s linear infinite;
-ms-animation: rotating 15s linear infinite;
-o-animation: rotating 15s linear infinite;
animation: rotating 15s linear infinite;
}
.flow-3 {
background: cyan;
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
</style>

