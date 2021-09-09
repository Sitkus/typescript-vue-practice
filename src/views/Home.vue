<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <MoneyCounter />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoneyCounter from '@/components/MoneyCounter.vue';

export default defineComponent({
    name: 'Home',

    components: {
        MoneyCounter
    }
});
</script>
