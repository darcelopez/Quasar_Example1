<template>
  <router-view />
</template>

<script>
  import { defineComponent } from 'vue'
  import { mapActions } from 'vuex'
  // const { ipcRenderer } = require('electron');

  // const fs = window.electronFs
  // const jsonContent = JSON.parse(fs.readFileSync(SOME_PATH))

  export default defineComponent({
    name: 'App',
    mounted(){
      if (this.$q.platform.is.electron) {
        window.myWindowAPI.on('show-settings', () => {
          this.$router.push('/settings')
        })
      }

      this.getSettings()
    },
    methods: {
      ...mapActions('storesettings', ['getSettings'])
    }
  })
</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  }
</style>
 