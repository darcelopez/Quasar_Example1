<template>
     <div class="row q-mb-sm">
        <q-input 
            outlined
            v-model="value"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            ref="name"
            label="Task name"
            class="col">
            <template v-slot:append>
                <q-icon
                    v-if="modelValue"
                    name="close"
                    @click="$emit('update:modelValue', '')"
                    class="cursor-pointer"/>
            </template>
        </q-input>
    </div>   
    
</template>

<script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        computed: {
            value: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
                }
        }
    }
</script>