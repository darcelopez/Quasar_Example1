<template>
    <q-item 
        @click="updateTask( {id: id, updates:{ completed: !task.completed}})"
        :class="!task.completed? 'bg-orange-1' : 'bg-green-1'"
        v-touch-hold:1000.mouse="handleTouch"
        clickable 
        v-ripple>
        <q-item-section side top>
            <q-checkbox 
                :model-value="task.completed"
                class="no-pointer-events"/>
        </q-item-section>

        <q-item-section>
            <q-item-label
                :class="{ 'text-strikethrough' : task.completed }"
                v-html="searchHighLight(task.name)"
            ></q-item-label>
        </q-item-section>

        <q-item-section 
            v-if="task.dueDate"
            side>  
            <div class="row">
                <div class="column justify-center">
                    <q-icon 
                        name="event"
                        size="18px"
                        class="q-mr-xs"
                        ></q-icon>
                </div>
                
                <div class="column">
                    <q-item-label 
                        class="row justify-end"
                        caption>
                        {{ niceDate }}
                    </q-item-label>
                    <q-item-label 
                        class="row justify-end"
                        caption>
                        <small>{{ task.dueTime }}</small>
                    </q-item-label>
                </div>
                
            </div>
        </q-item-section>

        <q-item-section side>
        <div class="div row">
            <q-btn
                @click.stop="showEditTask=true"
                flat
                round
                dense
                color="primary"
                icon="edit"/>
            <q-btn
                @click.stop="promptToDelete(id)"
                flat
                round
                dense
                color="primary"
                icon="delete"/>
        </div>
        </q-item-section>

        <q-dialog v-model="showEditTask">
            <edit-task 
                :task="task"
                :id="id"
                @close="showEditTask=false" />
        </q-dialog>
            
    </q-item>

</template>

<script>    
    import { mapState, mapActions } from 'vuex'
    import { date } from 'quasar'
    const { formatDate } = date

    export default {
        props: ['task', 'id'],
        components: {
            'edit-task' : require('components/Tasks/Modals/EditTask.vue').default,
        },
        data() {
            return {
                showEditTask: false
            }
        },
        computed: {
            ...mapState('storetasks', ['search']),
            niceDate(){
                return formatDate(this.task.dueDate, 'MMM D')
            }
        },
        methods: {
            ...mapActions('storetasks', ['updateTask', 'deleteTask']),
            promptToDelete(id) {
                this.$q.dialog({
                    title: 'Confirm',
                    message: 'Really delete?',
                    ok: {
                        push: true
                    },
                    cancel: {
                        color:'negative'
                    },
                    persistent: true
                    }).onOk(() => {
                        // console.log('Deleted')
                        this.deleteTask(id)
                    }).onCancel(() => {
                        // console.log('Cancel')
                    }).onDismiss(() => {
                        // console.log('I am triggered on both OK and Cancel')
                    })
            },
            handleTouch() {
                this.showEditTask = true
            },
            searchHighLight(value){
                if (this.search){
                    // to capture even with lower or Cap cases
                    let searchRegExp = new RegExp(this.search, 'ig')
                    return value.replace(searchRegExp, (match) => {
                        return '<span class="bg-yellow-6">' + match + '</span>'
                    })
                    // standard way
                    // return value.replace(this.search, '<span class="bg-yellow-6">' + this.search + '</span>')
                }
                return value
            }
        }
    }

</script>

<style>
</style>