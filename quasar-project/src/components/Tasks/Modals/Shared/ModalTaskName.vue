<template>
     <div class="row q-mb-sm">
        <q-input 
            outlined
            v-model="value"
            :rules="[val => !!val || 'Field is required']"
            autofocus
            v-select-all
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
import { selectAll } from 'src/directives/directive-select-all'

    export default {
        props: ['modelValue'],
        directives: {
            selectAll
        },
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