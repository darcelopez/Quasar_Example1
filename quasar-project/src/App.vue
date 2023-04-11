<template>
  <router-view />
</template>

<script>
  import { defineComponent } from 'vue'
  import { mapActions } from 'vuex'

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
 