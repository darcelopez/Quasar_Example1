<template>
    <q-card>
       <modal-header>Edit Task</modal-header>
       <form @submit.prevent="submitForm">
           <q-card-section>

               <modal-task-name
                   v-model="tasktoSumbit.name"
                   ref="modalTaskName"
               />

               <modal-task-duedate
                   v-model="tasktoSumbit.dueDate"
                   @clear="clearDueDate"
               />

               <modal-task-duetime
                   v-if="tasktoSumbit.dueDate"
                   v-model="tasktoSumbit.dueTime"
               />
              
           </q-card-section>

           <q-card-actions align="right">
           <q-btn 
               label="Save" 
               color="primary" 
               type="submit"/>
           </q-card-actions>

       </form>
      
     </q-card>
</template>

<script>
   import { mapActions } from 'vuex'
   import mixinAddEDitTask from 'src/mixins/mixin-add-edit-task.js'
   
   export default {
       mixins: [mixinAddEDitTask],
       props: ['task', 'id'],
       data() {
           return {
               tasktoSumbit: {
                   name: '',
                   dueDate: '',
                   dueTime: '',
                   completed: false
               }
           }
       },
       created(){
        this.tasktoSumbit = Object.assign({}, this.task)
       },
       methods: {
           ...mapActions('storetasks', ['updateTask']),
           submitTask() {
               this.updateTask({
                id: this.id,
                updates: this.tasktoSumbit
               })
               this.$emit('close')
           },
           clearDueDate() {
               this.tasktoSumbit.dueDate=''
               this.tasktoSumbit.dueTime=''
           }
       }
   }
</script>

<style>
   .pl-16 .q-field .q-field__inner .q-field__control-container .q-field__label {
       padding-left:16px;
   }
   .pl-16 .q-field .q-field__inner .q-field__control-container input {
       padding-left:13px;
   }
</style>