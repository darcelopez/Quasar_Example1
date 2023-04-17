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

        <q-item
          v-if="$q.platform.is.electron"
          @click="quitApp"
          clickable
          exact
          class="text-grey-5 absolute-bottom"
        >
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Quit</q-item-label>
            <q-item-label caption>Close the app</q-item-label>
          </q-item-section>
        </q-item>

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
    // {
    //   title: 'Exit',
    //   caption: 'Close the aplication',
    //   icon: 'power_settings_new',
    //   link: '/'
    // },
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
    },
    methods: {
      quitApp() {
         this.$q.dialog({
          title:'Confirm',
          message:'Really quit Awesome App?',
          cancel: true,
          persistent: true,
         }).onOk(() => {
          window.myWindowAPI.send('quit-app')
         })
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
  .platform-ios {
    .q-header {
      padding-top: constant(safe-area-inset-top);
      padding-top: env(safe-area-inset-top);
    }
    .q-footer {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
