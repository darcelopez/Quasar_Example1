<template>
  <q-page padding>
    <ul>
      <!-- <li v-for="(task, index) in tasks">
        <div>{{ task.name }} {{ index }}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(index)"> X </button>
      </li> -->
      <task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :index="index">
        {{ task.name }}
      </task>
    </ul>
   
  </q-page>
</template>

<script>
  import { defineComponent } from 'vue'
  // import Task from 'components/Task.vue'

  export default defineComponent({
    name: 'IndexPage',
    components: {
      // 'task': Task
      'task' : require('components/Task.vue').default
    },
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: 'Go to shop',
            dueDate: '2023/04/01',
            dueTime: '18:30'
          },
          {
            id: 2,
            name: 'Get bananas',
            dueDate: '2023/04/01',
            dueTime: '18:30'
          },
          {
            id: 3,
            name: 'Get apples',
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
