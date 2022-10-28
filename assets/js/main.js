import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
      return {
        todo:[
            {
                text:'Learn JS',
                done: false,
            },
            {
                text:'Learn VueJS',
                done: false,
            },
            {
                text:'Learn CSS',
                done: false,
            },
            {
                text:'Learn HTML',
                done: false,
            }
        ],
      }
    }
}).mount('#app')