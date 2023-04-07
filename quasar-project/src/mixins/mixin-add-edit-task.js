export default {
    components: {
        'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
        'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
        'modal-task-duedate': require('components/Tasks/Modals/Shared/ModalTaskDueDate.vue').default,
        'modal-task-duetime': require('components/Tasks/Modals/Shared/ModalTaskDueTime.vue').default,
    },
    methods: {
        submitForm() {
            this.$refs.modalTaskName.$refs.name.validate()
            if (!this.$refs.modalTaskName.$refs.name.hasError){
                this.submitTask()
            }
        },
        clearDueDate() {
            this.tasktoSumbit.dueDate=''
            this.tasktoSumbit.dueTime=''
        },
    }
}