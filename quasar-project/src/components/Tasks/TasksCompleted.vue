<template>
    <div>
        <list-header>Completed</list-header>
        <q-list 
            v-if="Object.keys(tasksCompleted).length"
            separator 
            bordered>
                <task
                v-for="(task, key) in tasksCompleted"
                :key="key"
                :id="key"
                :task="task">
                </task>
        </q-list>
    </div>
    
</template>

<script>
    export default {
        props:['tasksCompleted'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'list-header' : require('components/Tasks/Modals/Shared/ListHeader.vue').default,
        }
    }
</script>

<style>

</style>