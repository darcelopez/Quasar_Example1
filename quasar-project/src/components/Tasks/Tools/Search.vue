<template>
    <q-input
        v-model="searchField"
        v-select-all
        outlined
        class="col"
        label="Search"
        >
        <template v-slot:append>
            <q-icon
              v-if="searchField !==''"
              name="close"
              @click="searchField = ''"
              class="cursor-pointer" />
            <q-icon
              name="search" />
        </template>
    </q-input>
</template>
<script>
    import { mapState, mapActions} from 'vuex'
    import { selectAll } from 'src/directives/directive-select-all'

    export default {
        computed: {
            ...mapState('storetasks', ['search']),
            searchField: {
                get() {
                    return this.search
                },
                set(value) {
                    this.setSearch(value)
                }
            }
        },
        methods: {
            ...mapActions('storetasks', ['setSearch'])
        },
        directives: {
            selectAll
        }

    }
</script>