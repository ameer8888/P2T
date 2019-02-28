<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <div class="navbar-menu">
                <div class="navbar-start">
<<<<<<< HEAD
                    <router-link class="navbar-item" to="/">Home</router-link>
                    <router-link class="navbar-item" to="">Map</router-link>
=======
                    
>>>>>>> uploadImg
                </div>
                <div class="navbar-end">
                    <clock class="navbar-item"></clock>
                </div>
            </div>
        </div>
    </nav>  
</template>

<script>
import Clock from './Clock.vue'

export default {
  name: 'navbar',
  components: { Clock }
}
</script>

