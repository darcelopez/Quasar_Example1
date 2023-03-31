<template>
  <q-page class="q-pa-md">
    <q-item-label header>User tasks list</q-item-label>
    <q-list 
      separator 
      bordered>
        <task
          v-for="task in tasks"
          :task="task"
          @click="task.completed = !task.completed">
        </task>

    </q-list>

  </q-page>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'IndexPage',
    components: {
      'task' : require('components/Task.vue').default
    },
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Go to shop',
            completed: false,
            dueDate: '2023/04/01',
            dueTime: '18:30'
          },
          {
            id: 2,
            name: 'Get bananas',
            completed: false,
            dueDate: '2023/04/01',
            dueTime: '18:30'
          },
          {
            id: 3,
            name: 'Get apples',
            completed: false,
            dueDate: '2023/04/01',
            dueTime: '18:30'
          }
      ]
      }
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
