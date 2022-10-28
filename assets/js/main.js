const {createApp} =Vue

createApp({
    data() {
      return {
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
            },
        ],
      }
    },
    methods: {
        addTask(){
            console.log('ho cliccato');
            //console.log(this.newTask);
            if (this.newTask.trim().length < 5) {
                //mostro messaggio
                this.error = true
            }else{
                this.error = false
                //pusho la task nell'array
                //this.container.text =  this.newTask
                const task = {
                    text: this.newTask,
                    done: false,
                };
                this.tasks.unshift(task) 
                //svuatare l'input dopo che la task è stata aggiunta
                this.newTask = ''
            }
            
        },
        cancella(index){
            console.log('ho cliccato su la task:', index);
            this.tasks.splice(index, 1)
        },
        sbarra(i){
            console.log('ho cliccato');
            const task = this.tasks[i]
            if (task.done === false) {
                task.done = true  
            }else{
                task.done= false
            }
            
        }
        
    }
}).mount('#app')