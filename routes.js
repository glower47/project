import LoginPage from './components/loginPage.vue';
import RegisterPage from './components/registerPage.vue';
import Main from './components/main.vue';

export default [
    { path: '/login', component: LoginPage},
    { path: '/register', component: RegisterPage},
    { path: '/main', component: Main},
    { path: '/', component: LoginPage}
]

