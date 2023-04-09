<template>
  <router-view />
</template>

<script>
  import { defineComponent } from 'vue'
  import { mapActions } from 'vuex'

  export default defineComponent({
    name: 'App',
    mounted(){
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
 