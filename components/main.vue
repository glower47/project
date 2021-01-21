<template>
    <div id="main">
        <nav-bar></nav-bar>
        <side-bar></side-bar>
        <content-comp></content-comp>
        
    </div>
</template>
<script>

import NavBar from './navBar.vue';
import SideBar from './sidebar.vue';
import Content from './content-comp.vue';

export default {
    components: {
        'nav-bar': NavBar,
        'side-bar': SideBar,
        'content-comp': Content
    }
}
</script>
<style scoped>

#main {
    position: relative;
    z-index: 1;
    }
</style>