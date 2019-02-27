<template>
    <div>
        
        <textarea v-model="text">
            
        </textarea>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import VueLoadingButton from 'vue-loading-button';

export default {
    data() {
        return {
            textToPresent:this.text,
        }
    },
    props:['text'],
    methods: {
        ...mapActions(['setStatus']),
      
    },
    components: {VueLoadingButton}
}
</script>
<style>

</style>
