<template>
    <div id="login">
        
        <h2>Sign In</h2>
        <p class="text-danger text-center">For you protection please verify your identity</p>
        <p>Username</p>
        <input type="text" class="form-control" placeholder="Enter your username..." v-model="username"><br>
        <p>Password</p>
        <input type="password" class="form-control" placeholder="Enter your password..." v-model="password"><br>
        <input type="checkbox" id="check" name="check"><label for="#checkbox" id="label">Remember me!</label><br>
        <button class="btn btn-info" value="signin" v-on:click.prevent="login">
            Sign in
        </button><br>
        <p class="text-center">Dont have an account yet?
            <router-link to='/register'>Sign up</router-link>

        </p>
    </div>
</template>
<script>

import SearchComp from './searchComp.vue';
import axios from 'axios';
var people = [];
var submited = false;

export default {
    data(){
        return {
            username: '',
            password: '',
            submitted: false,
            people: [],
            wrongPass: false
        }
    },
    components: {
        'search-box': SearchComp
    },
    methods: {
        login: function() {
            if (this.username != '' && this.password != '') {
                axios.post('http://localhost/login.php', {
                    username: this.username,
                    password: this.password
                })
                .then(function(response) {
                    if(response.data == true){
                        submited = true;
                        alert("You logged in successfuly!");
                        
                    }else {
                        alert("You entered a wrong username or a wrong password!");
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            } else {
                alert('Please enter username & password');
            }
            if(submited == true){
                this.$router.push('/main');
            }
        }
    }
}

</script>
<style scoped>
p {
        font-size: 18px;
    }
    input {
        border-radius: 7px;
        font-size: 20px;
    }
    #login {
        width: 500px;
        height: 80%;
        margin: auto auto;
        padding: 30px;
    }
    button {
        width: 100%;
        margin: 0 auto;
        text-align: center;
        font-size: 30px;
        border-radius: 10px;
    }
    h2 {
        font-size: 50px;
        text-align: center;
        width: 100%;
        margin: 0 auto;
        padding: 20px;
    }
    #label {
        font-size: 20px;
        padding-left: 15px;
    }
    #router {
        text-decoration: none;
        color: white;
    }
</style>