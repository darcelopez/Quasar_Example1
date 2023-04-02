<template>
    <div>
        <list-header>Todo</list-header>
        <!-- <list-header 
            :title="title"
        /> -->
        <q-list 
            v-if="Object.keys(tasksTodo).length"
            separator 
            bordered>
                <task
                v-for="(task, key) in tasksTodo"
                :key="key"
                :id="key"
                :task="task">
                </task>
        </q-list>
    </div>
</template>

<script>
    export default {
        props:['tasksTodo'],
        // data(){
        //     return {
        //         title:'Todo'
        //     } 
        // },
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'list-header' : require('components/Tasks/Modals/Shared/ListHeader.vue').default,
        }

    }
</script>

<style>

</style>