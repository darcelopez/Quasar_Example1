<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                    <q-icon name="account_circle" color="primary" />
                    
                </template>
                {{ titleCase }} to access your Todos anywhere!
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input
                v-model="formData.email"
                :rules="[ val => isValidEmailAddress(val) || 'Please enter a valid email address']"
                ref="email"
                lazy-rules
                type="email"
                outlined 
                class="col"
                label="Email"
                stack-label>
            </q-input>
        </div>
        <div class="row q-mb-md">
            <q-input
                v-model="formData.password"
                :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']"
                ref="password"
                lazy-rules
                type="password"
                outlined 
                class="col"
                label="Password"
                stack-label>
            </q-input>
        </div>
        <div class="row">
            <q-space />
            <q-btn
              color="primary"
              :label="tab" 
              type="submit"/>
        
        </div>
    </form>
</template>
<script>
    export default {
        props:['tab'],
        data() {
            return {
                formData: {
                    email:'',
                    password:''
                }
            }
        },
        computed: {
            titleCase(){
                let value = this.tab
                return value.charAt(0).toUpperCase() + value.slice(1)
            }
        },
        methods: {
            isValidEmailAddress(email){
                var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                return re.test(String(email).toLowerCase()) 
            },
            submitForm() {
                this.$refs.email.validate()
                this.$refs.password.validate()
                if (!this.$refs.email.hasError && !this.$refs.password.hasError){
                    if (this.tab == 'login') {
                        console.log('Submit to login user')
                    } else if ((this.tab == 'register') ) {
                        console.log('Submit to register user')
                    }
                }
            }

        }
    }
</script>
<style lang="">
    
</style>