<template>
    <div>
        <h1>User Settings</h1>
        <!-- <NavBar/> -->
        <a href="https://router.vuejs.org/zh/guide/essentials/named-views.html#嵌套命名视图">嵌套命名视图</a>
        <router-link to="/settings/one">emails</router-link>
        <router-link to="/settings/two">profile</router-link> 
        <router-view/>
        <router-view name="helper"/> 
    </div>
</template>
<script>
    import  './../assets/style.css';
    export default {
        name:'settings',
        return(){

        },
        mounted(){},
        methods:{},
        computend:{},
        components:{}
    }
</script>