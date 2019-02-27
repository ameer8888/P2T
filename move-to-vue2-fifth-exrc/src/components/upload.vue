<template>
    <div>
        <input id="image" type="file" @change="onUpload" class="inputfile">    
        <label for="image"><i class="fa fa-plus"></i></label>
        
        
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';


(function(e,t,n){var r=e.querySelectorAll("html")[0];r.className=r.className.replace(/(^|\s)no-js(\s|$)/,"$1js$2")})(document,window,0);
export default {
    data() {
        return {
        }
    },
    computed: {   

    },
    methods: {
        ...mapActions(['setStatus']),
        onUpload(event) {
            
            const file = event.target.files[0];
            const comprassedFile = this.comprass(file);
            this.convertToText(comprassedFile, (res) => {
                
                console.log(res);
                const text = res.text;
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
