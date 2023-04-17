export const autofocus = {
    // created() {
    //   console.log('Directive created')
    // },
  
    // bind
    beforeMount(el) {
      // console.log('Directive beforeMount (bind)')
      let input = el.querySelector('.q-field__native')
      setTimeout(() => {
        input.focus()
      }, 700);

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