<template>
     <transition
        appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut absolute-top" 
        >
        <div>
            <list-header
                v-if="!settings.showTasksInOneList"
                bgColor="bg-orange-4"
                >Todo</list-header>
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
    </transition>

</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        props:['tasksTodo'],
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