<template>
    <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut" 
        >
        <div 
            :class="{ 'q-mt-lg' : !settings.showTasksInOneList }">
            <list-header
                v-if="!settings.showTasksInOneList"
                bgColor="bg-green-4"
                >Completed</list-header>
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
    </transition>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        props:['tasksCompleted'],
        components: {
            'task' : require('components/Tasks/Task.vue').default,
            'list-header' : require('components/Tasks/Modals/Shared/ListHeader.vue').default,
        },
        computed: {
            ...mapGetters('storesettings', ['settings']),
        }
    }
</script>

<style>

</style>