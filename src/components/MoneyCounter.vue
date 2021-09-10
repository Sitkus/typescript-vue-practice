<template>
    <section>
        <h5>Money counter: {{ money }}</h5>
        <button data-testid="btn-increment" @click="checkMoneyCount('increment')">+++</button>
        <button data-testid="btn-decrement" @click="checkMoneyCount('decrement')">---</button>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MoneyCounter',

    data() {
        return {
            money: 10
        };
    },

    methods: {
        checkMoneyCount(mutation: string): void {
            if (this.money === 0 && mutation == 'decrement') {
                console.log('Maaan you are at zero already!');

                return;
            } else if (mutation == 'increment' || mutation == 'decrement') {
                this[mutation]();
            }
        },

        increment(): void {
            this.money++;
        },

        decrement(): void {
            this.money--;
        }
    }
});
</script>

<style scoped lang="scss"></style>
