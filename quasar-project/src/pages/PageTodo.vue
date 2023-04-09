<template>
  <q-page class="q-pa-md overflow-hidden">
    <div class="q-pa-md absolute full-width full-height column">

      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>

      <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search results</p>
      
      <q-scroll-area
        class="q-scroll-area-tasks q-mb-lg">

        <no-tasks
          v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
          @showAddTask="showAddTask = true"
        ></no-tasks>

        <task-todo 
          v-if="Object.keys(tasksTodo).length"
          :tasksTodo="tasksTodo"/>

        <task-completed 
          v-if="Object.keys(tasksCompleted).length"
          class="q-mb-lg"
          :tasksCompleted="tasksCompleted"/>
      </q-scroll-area>

      <div class="absolute-bottom text-center no-pointer-events q-mb-lg">
          <q-btn
            @click="showAddTask=true"
            round
            class="all-pointer-events"
            color="primary"
            size="24px"
            icon="add"
            />
      </div>

      <q-dialog v-model="showAddTask">
        <add-task @close="showAddTask=false" />
      </q-dialog>

    
    </div>   
  </q-page>
</template>
 
<script>
  import { defineComponent } from 'vue'
  import { mapGetters, mapState } from 'vuex'

  export default defineComponent({
    name: 'IndexPage',
    components: {
      'add-task' : require('components/Tasks/Modals/AddTask.vue').default,
      'task-todo' : require('components/Tasks/TasksTodo.vue').default,
      'task-completed' : require('components/Tasks/TasksCompleted.vue').default,
      'no-tasks' : require('components/Tasks/NoTasks.vue').default,
      'search' : require('components/Tasks/Tools/Search.vue').default,
      'sort' : require('components/Tasks/Tools/Sort.vue').default,
    },
    data() {
      return {
        showAddTask: false
      }
    },
    computed: {
      ...mapGetters('storetasks', ['tasksTodo', 'tasksCompleted']),
      ...mapGetters('storesettings', ['settings']),
      ...mapState('storetasks', ['search'])
      // tasks() {
      //   console.log('Computed -> tasks')
      //   console.log(this.$store.getters['storetasks/tasksTodo'])
      //   return this.$store.getters['storetasks/tasksTodo']
      // }
    },
    methods: {
      deleteTask(index) {
        this.tasks.splice(index,1)
      }
    }
  })
</script>

<style>
  .q-scroll-area-tasks {
    display:flex;
    flex-grow:1;
    overflow-x:hidden;
  }

</style>
