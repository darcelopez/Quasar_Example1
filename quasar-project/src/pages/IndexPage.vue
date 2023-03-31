<template>
  <!-- <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page> -->
  <q-page padding>
    <button
      style="position: absolute; right: 10px;"
      @click="counter++"> {{ counter }}
    </button>

    <input 
      v-model="message" 
      @keyup="handleKeyup"
      v-autofocus 
      :style="errorStyle"
      ref="messageInput" />

      <!-- 
        :class="{ 'error' : message.legnth > 22 }"
        :style="errorStyle"  -->



    <!-- <button @click="message =''">Clear</button> -->
    <button @click="clrearMessage">Clear</button>

    <div> {{ message.length }}</div>

    <h5 
      v-if="message.length>0"
      class="border-grey">{{ message }}</h5>

    <h6
      v-else> No message entered</h6>

    <hr>

    <!-- <p>Uppercase message: {{ messageUpperCase() }}</p> -->
    <p>Uppercase message: {{ getMessageUpperCase }}</p>
  </q-page>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'IndexPage',
    data() {
      return {
        message: 'I love Vue JS',
        counter: 0
      }
    },
    computed: {
      getMessageUpperCase(){
        return this.message.toUpperCase()
      },
      errorStyle() {
        if (this.message.length > 22) {
          return {
            'color': 'red',
            'background': 'pink'
          }
        }
      }
    },
    methods: {
      clrearMessage(){
        this.message = ""
      },
      handleKeyup(e) {
        console.log(e)
        if (e.keyCode == 27){
          this.clrearMessage()
        } else if (e.keyCode == 13) {
          this.alertMessage()
        }
      },
      alertMessage() {
        alert(this.message)
      },
      messageUpperCase(){
        return this.message.toUpperCase()
      }
    },
    directives:{ 
      autofocus: {
        inserted(el) {
          el.focus()
          console.log('input inserted')
        }
      }
    },
    beforeCreate(){
      console.log('beforeCreate')
    },
    created(){
      console.log('created')
    },
    beforeMount(){
      console.log('beforeMount')
    },
    mounted(){
      console.log('mounted')
      console.log(this.$refs)
      this.$refs.messageInput.className = 'bg-green'
    },
    unmounted() {
      console.log('unmounted')
    }
  })
</script>

<style>
  .border-grey {
    border: 1px solid grey;
  }
  input, button {
    font-size: 23px;
  }
  .error {
    color:red;
    background: pink;
  }
</style>
