<template>
     <q-card>
        <q-card-section class="row">
          <div class="text-h6">Add task</div>
          <q-space />
          <q-btn
             v-close-popup
             flat
             round
             dense
             icon="close"
             />
        </q-card-section>

        <form @submit.prevent="submitForm">
            <q-card-section>
                <div class="row q-mb-sm">
                <q-input 
                    outlined
                    v-model="tasktoSumbit.name"
                    :rules="[val => !!val || 'Field is required']"
                    autofocus
                    ref="name"
                    label="Task name"
                    class="col">
                    <template v-slot:append>
                        <q-icon
                            v-if="tasktoSumbit.name"
                            name="close"
                            @click="tasktoSumbit.name=''"
                            class="cursor-pointer"/>
                    </template>
                </q-input>
        
                </div>   
                <div 
                    class="row q-mb-sm pl-16">
                    <q-input 
                        oulined
                        label="Due date"
                        v-model="tasktoSumbit.dueDate">
                        <template v-slot:append>
                            <q-icon
                                v-if="tasktoSumbit.dueDate"
                                name="close"
                                @click="clearDueDate"
                                class="cursor-pointer"/>
                            <q-icon name="event" class="cursos-pointer">
                                <q-popup-proxy>
                                    <q-date v-model="tasktoSumbit.dueDate" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div 
                    v-if="tasktoSumbit.dueDate"
                    class="row q-mb-sm pl-16">
                    <q-input 
                        oulined
                        label="Due time"
                        v-model="tasktoSumbit.dueTime"
                        class="col">
                        <template v-slot:append>
                            <q-icon
                                v-if="tasktoSumbit.dueTime"
                                name="close"
                                @click="tasktoSumbit.dueTime=''"
                                class="cursor-pointer"/>
                            <q-icon name="access_time" class="cursos-pointer">
                                <q-popup-proxy>
                                    <q-time v-model="tasktoSumbit.dueTime" />
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>     
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
    export default {
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
        methods: {
            ...mapActions('storetasks', ['addTask']),
            submitForm() {
                console.log('submitForm')
                this.$refs.name.validate()
                if (!this.$refs.name.hasError){
                    this.submitTask()
                }
            },
            submitTask() {
                this.addTask(this.tasktoSumbit)
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