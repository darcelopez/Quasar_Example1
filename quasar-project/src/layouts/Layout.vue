<template>
  <!--  <q-layout view="lHh Lpr lFf"> -->
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn
          to="/login"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
          >
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="768"
      :width="250"
      show-if-above
      bordered 
      class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-4"
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs>
          <q-route-tab
              v-for="link in essentialLinks"
              :key="link.title"
              :icon="link.icon"
              :label="link.title"
              :to="link.link"
              >
          </q-route-tab>
        </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import EssentialLink from 'components/EssentialLink.vue'

  const linksList = [
    {
      title: 'TODO',
      caption: 'Check pending tasks',
      icon: 'list ',
      link: '/'
    },
    {
      title: 'Settings',
      caption: 'Check out your settings',
      icon: 'settings',
      link: '/settings'
    },
  ]

  export default defineComponent({
    name: 'MainLayout',

    components: {
      EssentialLink
    },

    setup () {
      const leftDrawerOpen = ref(false)

      return {
        essentialLinks: linksList,
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
    }
  })
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active {
      color:white !important;
    }
  }
</style>
