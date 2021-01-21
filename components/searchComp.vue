<template>
    <div>
        <p>{{ title }}</p>
        <input v-bind:type="type" class="form-control" v-bind:placeholder="placeholder"><br>
    </div>
</template>
<script>
export default {
    props: ['title', 'placeholder', 'type'],
    data(){
        return {

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
</style>