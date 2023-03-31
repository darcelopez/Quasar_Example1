<template>
  <q-page class="q-pa-md">
    <q-item-label header>User tasks list</q-item-label>
    <q-list 
      separator 
      bordered>
        <task
          v-for="(task, key) in tasks"
          :key="key"
          :id="key"
          :task="task">
        </task>

    </q-list>

  </q-page>
</template>

<script>
  import { defineComponent } from 'vue'
  import { mapGetters } from 'vuex'

  export default defineComponent({
    name: 'IndexPage',
    components: {
      'task' : require('components/Tasks/Task.vue').default
    },
    computed: {
      ...mapGetters('storetasks', ['tasks']),
      // tasks() {
      //   console.log('Computed -> tasks')
      //   console.log(this.$store.getters['storetasks/tasks'])
      //   return this.$store.getters['storetasks/tasks']
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
