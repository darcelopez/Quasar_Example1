<template>
    <q-page padding>
      <q-list bordered padding>

      <q-item-label header>Settings</q-item-label>
      <q-separator spaced />

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hours time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="show12HourTimeFormat" 
            color="blue"
            val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model="showTasksInOneList" 
            color="blue"
            val="battery" />
        </q-item-section>
      </q-item>

    </q-list>
    </q-page>
</template>
  
<script>
  import { defineComponent } from 'vue'
  import { mapGetters, mapActions } from 'vuex'

  export default defineComponent({
    name: 'PageSettings',
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters('storesettings', ['settings']),
      show12HourTimeFormat:{
        get() {
          return this.settings.show12HourTimeFormat
        },
        set(value) {
          this.setShow12HourTimeFormat(value)
        }
      },
      showTasksInOneList: {
        get() {
          return this.settings.showTasksInOneList
        },
        set(value) {
          this.setShowTasksInOneList(value)
        }
      }
    },
    methods: {
      ...mapActions('storesettings', ['setShow12HourTimeFormat', 'setShowTasksInOneList'])
    }
  })
</script>

<style>

</style>
