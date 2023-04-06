<template>
  <q-select
     filled
     v-model="sortBy"
     :options="options"
     emit-value
     map-options
     class="col q-ml-sm"
     label="Sort by"
     stack-label />
</template>
<script>
    export default {
        data() {
            return {
                sortBy: null,
                options: [
                    {
                        label:'Name',
                        value:'name'
                    },{
                        label:'Date',
                        value:'dueDate'
                    }
                ],
            }
        }
    }
</script>
<style scoped>
    .q-select {
        flex: 0 0 112px;
    }
</style>