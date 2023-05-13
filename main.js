//  {{ }} - интерполяция
// атрибуты которые начинаются на v - назся директивами

// v-model - задается только тегам input, textarea, select

const app = {
    data() {
        return {
            colore: '',
            value: 0,

        }
    },
    methods: {
        switchColore () {
            
        }
    },
}

Vue.createApp(app).mount('#app')

