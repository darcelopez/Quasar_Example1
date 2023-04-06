<template>
  <q-page class="q-pa-md">

    <div class="row q-mb-lg">
      <search />
    </div>

    <p v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length">No search results</p>
    
    <no-tasks
      v-if="!Object.keys(tasksTodo).length && !search"
      @showAddTask="showAddTask = true"

    ></no-tasks>

    <task-todo 
      v-if="Object.keys(tasksTodo).length"
      :tasksTodo="tasksTodo"/>

    <task-completed 
      v-if="Object.keys(tasksCompleted).length"
      :tasksCompleted="tasksCompleted"/>

    <div class="absolute-bottom text-center q-mb-lg">
        <q-btn
          @click="showAddTask=true"
          round
          color="primary"
          size="24px"
          icon="add"
          />
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask=false" />
    </q-dialog>

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
    },
    data() {
      return {
        showAddTask: false
      }
    },
    computed: {
      ...mapGetters('storetasks', ['tasksTodo', 'tasksCompleted']),
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

</style>
