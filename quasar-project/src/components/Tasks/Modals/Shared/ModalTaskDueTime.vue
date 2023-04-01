<template>
    <div class="row q-mb-sm">
       <q-input 
           outlined
           v-model="value"
           label="Due Time"
           class="col">
           <template v-slot:append>
               <q-icon
                   v-if="modelValue"
                   name="close"
                   @click="$emit('update:modelValue', '')"
                   class="cursor-pointer"/>
                <q-icon name="access_time" class="cursos-pointer">
                    <q-popup-proxy>
                        <q-time v-model="value" />
                    </q-popup-proxy>
                </q-icon>
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