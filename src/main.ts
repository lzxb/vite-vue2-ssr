import Vue from 'vue';
import App from './app.vue';

export function createApp () {
    return new Vue({
        render (h) {
            return h(App);
        }
    })

}