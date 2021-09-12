<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <MoneyCounter />
        <UserCard />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoneyCounter from '@/components/MoneyCounter.vue';
import UserCard from '@/components/UserCard.vue';

export default defineComponent({
    name: 'Home',

    components: {
        MoneyCounter,
        UserCard
    }
});
</script>
