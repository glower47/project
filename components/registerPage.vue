<template>
    <div id="register">
        <h2>Sign Up</h2>
        <p class="text-secondary text-center">One Admin ID is all you need to access all the Admin services</p>
        <p>Name</p>
        <input type="text" class="form-control" placeholder="e.g Andrei" v-model="username"><br>
        <p>Email adress</p>
        <input type="text" class="form-control" placeholder="username@address.com" v-model="email"><br>
        <p>Password</p>
        <input type="password" class="form-control" placeholder="your password here..." v-model="password"><br>
        <p>Confirm Password</p>
        <input type="password" class="form-control" placeholder="confirm your password..." v-model="cpassword"><br>
        <p id="select">Country</p>
        <select class="form-control">
            <option value="usa">United States</option>
        </select><br>
        <p id="select">Gender</p>
        <select class="form-control">
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select><br>
        <p id="select">Date of Birth</p>
        <div class="row">
            <div class="col-sm-6">
                <select class="form-control">
                   <option value="female">Month</option>
                   <option value="male">Month</option>
                </select>
            </div>
            <div class="col-sm-3">
                <select class="form-control">
                   <option value="female">Day</option>
                   <option value="male">Day</option>
                </select>
            </div>
            <div class="col-sm-3">
                <select class="form-control">
                   <option value="female">Year</option>
                   <option value="male">Year</option>
                </select>
            </div>
        </div><br>
        <div class="row">
            <div class="col-sm-1"><input type="checkbox" id="check" name="check"></div>
            <div class="col-sm-11">
                <label for="#checkbox" id="label">I have read and
                    agree to the Terms of Use and Privacy Policy
                </label>
            </div>
        </div><br>
        <button class="btn btn-primary" value="signin" v-on:click.prevent="register">
           Sign up
        </button><br>
        <p class="text-center">Already have an Admin ID? 
            <router-link to='/login' id="router"> Sign In</router-link>
        </p>
    </div>
</template>
<script>

import SearchComp from './searchComp.vue';
import axios from 'axios';
var submited = false;

export default {
    data (){
        return {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            match: true
        }
    },
    components: {
        'search-box': SearchComp
    },
    methods: {
        register: function(){ 
            const data = {
                username: this.username,
                email: this.email,
                password: this.password
            }
            if (this.password == this.cpassword) {
                axios.post('http://localhost/register.php', data)
                .then(function(response) {
                    if(response.data == true){
                        submited = true;
                        alert("You registered successfully, now you can login");
                    }else if(response.data == false){
                        alert("This user already exists!!!");
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            } else {
                alert('Your passwords dont match!');
            }
            if(submited == true){
                this.$router.push('/login');
            }
        }
    }
}

</script>
<style scoped>
    #register {
        width: 500px;
        height: 80%;
        margin: auto auto;
        padding: 30px;
    }
    #select {
        font-size: 18px;
    }
    select {
        border-radius: 7px;
        font-size: 20px;
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
        color: black;
    }
    p {
        font-size: 18px;
    }
    input {
        border-radius: 7px;
        font-size: 20px;
    }
</style>