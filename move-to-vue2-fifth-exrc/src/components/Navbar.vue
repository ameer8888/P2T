<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item" href="">
                Convoyage
            </a>
            <div class="navbar-menu">
                <div class="navbar-start">
                    
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

