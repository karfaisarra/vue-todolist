const {createApp} =Vue

createApp({
    data() {
      return {
        container:{
            text:'',
            done: false,
        },
        error: false,
        newTask:'',
        tasks:[
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
    },
    methods: {
        addTask(){
            console.log('ho cliccato');
            //console.log(this.newTask);
            if (this.newTask.length < 5) {
                //mostro messaggio
                this.error = true
            }else{
                this.error = false
                //pusho la task nell'array
                this.container.text =  this.newTask
                this.tasks.unshift(this.container)
                
                //svuatare l'input dopo che la task è stata aggiunta
                this.newTask = ''

            }
            this.container.text = ''
        },
        delete(index){
            console.log('ho cliccato');
            this.tasks.splice(index, 1)
        }
    }
}).mount('#app')