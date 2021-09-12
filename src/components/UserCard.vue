<template>
    <div>
        <button @click="fetchUser">Fetch Random User</button>
    </div>

    <p>{{ getRandomUserName }}</p>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
    name: 'UserCard',

    computed: mapGetters(['getRandomUserName']),

    methods: mapActions(['fetchUser'])
});
</script>
