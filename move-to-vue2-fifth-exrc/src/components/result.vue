<template>
    <div>
        <textarea v-model="text">
            
        </textarea>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

export default {
    data() {
        return {
            textToPresent:this.text,
        }
    },
    props:['text'],
    computed: {   

    },
    methods: {
        ...mapActions(['setStatus']),
      

    }
}
</script>
<style>

</style>
