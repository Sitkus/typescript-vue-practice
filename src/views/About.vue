<template>
    <div class="about">
        <h1>Here you can write opinion about this page!</h1>

        <br />
        <p v-show="isOpinionShown">{{ opinion }}</p>
        <br />

        <textarea
            v-model.trim="opinion"
            name="opinion"
            placeholder="Write your opinion here..."
            id="opinion"
            cols="30"
            rows="10"
        ></textarea>

        <br />

        <button @click="checkOpinionField">Add Opinion</button>
        <br />
        <button v-show="isOpinionShown" @click="removeAndHideOpinion">Remove Opinion</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'About',

    data() {
        return {
            opinion: '',
            isOpinionShown: false
        };
    },

    watch: {
        opinion(newValue: string) {
            if (this.isOpinionShown) {
                this.removeAndHideOpinion();
            }
        }
    },

    methods: {
        checkOpinionField(): void {
            if (this.opinion.length) {
                this.showOpinion();
            } else {
                console.log('Error mate, add something to the textarea!!!');
            }
        },

        showOpinion(): void {
            this.isOpinionShown = true;
        },

        removeAndHideOpinion(): void {
            this.isOpinionShown = false;
            this.opinion = '';
        }
    }
});
</script>
