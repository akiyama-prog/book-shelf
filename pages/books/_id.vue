<template>
    <h1>{{ title }}</h1>
</template>
<script>
    import store from '../../store';
    export default {
        data: () => ({
            title: '',
            author: '',
            genre: '',
            contents: '',
            scores: '',
            message: ''
        }),
        create: {
            async fetch({ store }) {
                const book = await store.dispatch('showBookAction', this.$route.params.id)
                store.commit('showBook', book)
            }
        },
    }
</script>