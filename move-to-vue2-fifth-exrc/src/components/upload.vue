<template>
    <div>
        
       <input id="image" type="file" @change="savefile" class="inputfile">  
            <label for="image" v-if="file==''">
                <i class="fa fa-plus"></i>        
            </label>
        <label v-if="file!=''">
            <img v-if="imgToShow != null" :src="imgToShow" /> 
        </label>


             <VueLoadingButton
                aria-label="Post message"
                class="button"
                @click.native="handleClick"
                :loading="isLoading"
                :styled="isStyled"
                v-if="file!=''"
            >
                 המר תמונה לטקסט
            </VueLoadingButton>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
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
            image : null

        }
    },
    computed: {   

    },
    components: {VueLoadingButton},
    methods: {
        ...mapActions(['setStatus']),
        handleClick() {
            this.isLoading = true;
            this.onUpload();
            
        },
        savefile(event){
            this.imgToShow = null;
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
                this.image.to_gray();
                this.image.to_bw(255 - this.image.stats().avg_r);
                this.imgToShow = this.image.to_canvas().toDataURL();
            }
            
        },
        onUpload() {
            
            const comprassedFile = this.image.to_canvas();
            this.convertToText(comprassedFile, (res) => {
                
                this.isLoading = false;
                console.log(res);
                const text = res.text;
                this.currText = text;
                this.setStatus(true);
                this.$emit('uploaded',text);
            });
            
        },
        comprass(img) {
            return img;
        },
        convertToText(img,cb) {
            
            Tesseract.recognize(img)
            .then(function(result){
                cb(result)
            });
        }

    }
}
</script>
<style>
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
    .inputfile + label {
    font-size: 100px;
    font-weight: 700;
    color: lightgreen;
    background-color: white;
    display: inline-block;
}

.inputfile + label {
	cursor: pointer; /* "hand" cursor */
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
</style>
