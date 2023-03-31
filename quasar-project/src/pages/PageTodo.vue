<template>
  <q-page padding>
    <p>Todo page</p>
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
