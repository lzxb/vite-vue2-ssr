<template>
    <div class="app" @click="plus()">Hi{{count}} <demo></demo></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'app',
    components: {
        // Run ok
        // demo: () => import('./demo.vue').then(m => m.default),
        // Run Error
        demo: () => import('./demo.vue').then(m => m.default)
    },
    data () {
        return {
            count: 100
        }
    },
    methods: {
        plus() {
            this.count++;
        }
    }
})
</script>
<style>
.app {
    background: #ccc;
}
</style>