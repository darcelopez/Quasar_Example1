import { Platform }  from 'quasar'

export const autofocus = {
    // created() {
    //   console.log('Directive created')
    // },
  
    // bind
    beforeMount(el, binding) {
      // console.log('Directive beforeMount (bind)')
      let input = el.querySelector('.q-field__native')
      let delay = 0
      if (Platform.is.cordova) {
        delay = 700
        if (binding) {
            delay = binding.value.delayCordova
        }
      }
      setTimeout(() => {
        input.focus()
      }, delay);

    },
  
    // // inserted
    // mounted(el, binding) {
    //   console.log('Directive mounted (inserted)')
    // },
  
    // beforeUpdate(el, binding){
    //   console.log('Directive beforeUpdate')
    // },
  
    // // componentUpdated
    // updated(el, binding){
    //   console.log('Directive updated (componentUpdated)')
    // },
  
    // beforeUnmount(el, binding){
    //   console.log('Directive beforeUnmount')
    // },
  
    // // unbind
    // unmounted(el, binding){
    //   console.log('Directive unmounted(unbind)')
    // },
    
  }