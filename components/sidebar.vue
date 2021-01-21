<template>
    <div id="sidebar">
        <div class="menu">
            <div class="menu-header text-secondary">Navigation</div>
            <div class="menu-item"  v-for="(title, index) in titles">
                <router-link to="/main">
                    <span class="menu-icon"><i v-bind:class="icon[index]"></i></span>
                    <span class="menu-text">{{ title }}</span>
                </router-link>
            </div>
            <div class="menu-header text-secondary">Components</div>
            <div class="menu-item">
                <router-link to="/main">
                    <span class="menu-icon"><i class="fa fa-qrcode"></i></span>
                    <span class="menu-text">Widgets</span>
                </router-link>
            </div>
            <!--<div class="menu-item">
                <b-dropdown block no-caret>
                    <template #button-content>
                        <span class="menu-icon"><i class="fa fa-heart"></i></span>
                        <span class="menu-text">UI Kits</span>
                        <i class="fas fa-caret-down"></i>
                    </template>
                    <b-dropdown-item v-for="title in titles1">{{ title}}</b-dropdown-item>
                </b-dropdown>
            </div>-->
            <div class="menu-item collapse-item">
                <b-button v-b-toggle.collapse1>
                    <span class="menu-icon"><i class="fa fa-heart"></i></span>
                    <span class="menu-text">UI Kits</span>
                    <i class="fas fa-caret-down"></i>
                </b-button>
                <b-collapse id="collapse1">
                    <b-card>
                        <ul class="list-unstyled">
                            <li v-for="title in titles1">{{ title }}</li>
                        </ul>
                    </b-card>
                </b-collapse>

            </div>
            <div class="menu-item collapse-item">
                <b-button v-b-toggle.collapse2>
                    <span class="menu-icon"><i class="fa fa-file-alt"></i></span>
                    <span class="menu-text">Forms</span>
                    <i class="fas fa-caret-down"></i>
                </b-button>
                <b-collapse id="collapse2">
                    <b-card>
                        <ul class="list-unstyled">
                            <li v-for="title in titles1">{{ title }}</li>
                        </ul>
                    </b-card>
                </b-collapse>

            </div>
            <div class="menu-item collapse-item">
                <b-button v-b-toggle.collapse3>
                    <span class="menu-icon"><i class="fa fa-table"></i></span>
                    <span class="menu-text">Tables</span>
                    <i class="fas fa-caret-down"></i>
                </b-button>
                <b-collapse id="collapse3">
                    <b-card>
                        <ul class="list-unstyled">
                            <li v-for="title in titles1">{{ title }}</li>
                        </ul>
                    </b-card>
                </b-collapse>

            </div>
            <div class="menu-item">
                <router-link to="/main">
                    <span class="menu-icon"><i class="fa fa-map-marker-alt"></i></span>
                    <span class="menu-text">Map</span>
                </router-link>
            </div>
            <div class="menu-item collapse-item">
                <b-button v-b-toggle.collapse4>
                    <span class="menu-icon"><i class="fa fa-chart-bar"></i></span>
                    <span class="menu-text">Charts</span>
                    <i class="fas fa-caret-down"></i>
                </b-button>
                <b-collapse id="collapse4">
                    <b-card>
                        <ul class="list-unstyled">
                            <li v-for="title in titles1">{{ title }}</li>
                        </ul>
                    </b-card>
                </b-collapse>

            </div>
            <div class="menu-item collapse-item">
                <b-button v-b-toggle.collapse5>
                    <span class="menu-icon"><i class="fa fa-code-branch"></i></span>
                    <span class="menu-text">Layout</span>
                    <i class="fas fa-caret-down"></i>
                </b-button>
                <b-collapse id="collapse5">
                    <b-card>
                        <ul class="list-unstyled">
                            <li v-for="title in titles1">{{ title }}</li>
                        </ul>
                    </b-card>
                </b-collapse>

            </div>
            <div class="menu-item collapse-item">
                <b-button v-b-toggle.collapse6>
                    <span class="menu-icon"><i class="fa fa-globe"></i></span>
                    <span class="menu-text">Pages</span>
                    <i class="fas fa-caret-down"></i>
                </b-button>
                <b-collapse id="collapse6">
                    <b-card>
                        <ul class="list-unstyled">
                            <li v-for="title in titles1">{{ title }}</li>
                        </ul>
                    </b-card>
                </b-collapse>

            </div>
            <div class="menu-header text-secondary">Users</div>
            <div class="menu-item"  v-for="(title, index) in titles2">
                <router-link to="/main">
                    <span class="menu-icon"><i v-bind:class="icon2[index]"></i></span>
                    <span class="menu-text">{{ title }}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            titles: ['Dashboard', 'Analytics', 'Email'],
            icon: ['fa fa-laptop', 'fa fa-chart-pie', 'fa fa-envelope'],
            titles1: ['Bootstrap', 'Buttons', 'Card', 'Icons', 'Modal & Notifications', 'Typography', 'Tabs & Accordions'],
            titles2: ['Profile', 'Calendar', 'Settings', 'Helper'],
            icon2: ['fa fa-user-circle', 'fa fa-calendar', 'fa fa-cog', 'fa fa-question-circle']
        }
    }
}
</script>
<style scoped>
    @media all and (max-width: 1000px){
        #sidebar { display: none; }
    }
    .btn-secondary, .card {
        background-color: transparent;
        border: none;
        padding: 0;
    }
    .card ul li{
        margin: 10px auto;
        padding: 0;
    }
    
    #sidebar {
        position: fixed;
        margin-top: 55px;
        width: 250px;
        height: 95%;
        z-index: 1;
        background-color: rgb(243, 243, 243);
        border-right: 1px solid rgb(179, 179, 179);
        clear: both;
        overflow: scroll;
    }
    .menu-header {
        padding: 0;
        margin: 15px 30px;
    }
    .menu-item {
        padding: 5px;
        margin: 6px 30px;
        text-decoration: none;
    }
    .menu-item:hover {
        background-color: #b1b1b1;
        border-radius: 8px;
    }

    .menu-text, .menu-icon {
        color: black;
    }
    .menu-caret{
        background-color: transparent;
    }
    .button-content{
        float: left;
    }
    ::-webkit-scrollbar {
    width: 3px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
</style>