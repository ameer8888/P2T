<template>
    <div>
        <div  v-if="imgToShow != null" class="select">
        <select v-model="language">
            <option disabled value="">Please select a language</option>
            <option>English</option>
            <option>Hebrew</option>
            <option>English and Hebrew</option>
        </select>
    </div>

        <input id="image" type="file" @change="savefile" class="inputfile">  
            
        <label for="image" v-if="isChoose"> <img src="../img/newUp.png" style="height: 250px !important; width: 350px !important"></label>
        <result v-if='isUploaded' :text=text style="padding-left:500px; padding-bottom:100px"></result>

        <label>
            <img :src="imgToShow" v-if="showImage" /> 
        </label>
        <a class="button is-outlined" @click="setStatus(false); isChoose=true; showImage = false;" v-if='isUploaded'>Upload another pic</a>

             <VueLoadingButton
                id="convertToTextBtn"
                aria-label="Post message"
                class="button"
                @click.native="handleClick"
                :loading="isLoading"
                :styled="isStyled"
                v-if="file!=''"
            >
                 Convert pic to text
            </VueLoadingButton>

           

    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import result from '../components/result.vue';
import VueLoadingButton from 'vue-loading-button';

(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);
export default {
    data() {
        return {
            isLoading: false,
            isStyled: true,
            currText:'',
            file:'',
            imgToShow : null,
            image : null,
            text:'',
            isChoose:true,
            language: "",
            showImage : false

        }
    },
    computed: {
        ...mapState(['isUploaded']),
    },
    components: {result,VueLoadingButton},
    methods: {
        ...mapActions(['setStatus']),
        setText(text){
            this.currtext=text;
        },
        handleClick() {
            this.isLoading = true;
            this.onUpload();
            
        },
        savefile(event){
            this.imgToShow = null;
            this.showImage = false;
            this.file = event.target.files[0];
            this.image = new image_handller(this.file);
            this.image.on_load = () => 
            {
                var scale = 1;
                if(this.image.width * this.image.height > 3000 * 3000)
                {
                    scale = 0.3;
                }
                else if(this.image.width * this.image.height > 2000 * 2000)
                {
                    scale = 0.4;
                }
                else if(this.image.width * this.image.height > 1500 * 1500)
                {
                    scale = 0.5;
                }
                else if(this.image.width * this.image.height > 1000 * 1000)
                {
                    scale = 0.7
                }
                this.image.scale(scale,scale);

                this.image.to_gray()
                this.image.to_bw(this.image.stats().ultimateAvg);
                this.imgToShow = this.image.to_canvas().toDataURL();
                this.showImage = true;
            }
            this.isChoose = false;
            
        },
        onUpload() {
            
            const comprassedFile = this.image.to_canvas();
            this.convertToText(comprassedFile, (text,res) => {
                
                this.isLoading = false;
                this.showImage = false;
                console.log(res);
                this.text = text;

                this.setStatus(true);
                this.file = '';
            });
            
        },
        comprass(img) {
            return img;
        },
        convertToText(img,cb) {
            const lang = [];
            if (this.language === "English") {
                console.log("eng");
                lang.push('eng');
            } else if (this.language === "Hebrew") {
                lang.push('heb');
            } else {
                lang.push('eng','heb');
            }
			load_tesseract(img,{langs : lang, merge : true, threshold : 75},cb);
        }

    }
}
</script>
<style scoped>
.vue-loading-button {
    background-color: rgb(29, 129, 82) !important;
    color: white !important; 
}

.browser-default {
    margin-top: 5%;
}

.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
    .inputfile{
    font-size: 100px;
    font-weight: 700;
    color: lightgreen;
    background-color: white;
    display: inline-block;
}

label {
    font-size: 320px;
    margin-top: 250px;
    margin-left: 350px;
}

.inputfile + label {
	cursor: pointer; 
}

.inputfile:focus + label,
.inputfile + label:hover {
    filter:brightness(95%);
}

.js .inputfile {
    width: 10px;
    height: 10px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}

.no-js .inputfile + label {
    display: none;
}

button {
    margin-top: 24px!important;
}

.button {
    padding-right: 20%!important;
    padding-left: 20%!important;
    margin-left: 20%!important;
}

img {
    height: 500px !important;
    width: 500px !important;
    padding: 10px !important;
}

#convertToTextBtn {
    padding-right: 50px;
}
</style>