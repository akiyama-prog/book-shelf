<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th>
                        <h1>{{ showBook.title }}</h1>
                    </th>
                    <th>
                        <h2>{{ showBook.author }}</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ジャンル</td>
                    <td>{{ showBook.genre }}</td>
                </tr>
                <tr>
                    <td>スコア</td>
                    <td>{{ showBook.scores }}</td>
                </tr>
                <tr>
                    <td>読了日</td>
                    <td>{{ showBook.finish_date }}</td>
                </tr>
                <tr>
                    <td>読書メモ</td>
                    <td>{{ showBook.memo }}</td>
                </tr>
                <tr>
                    <td>感想</td>
                    <td>{{ showBook.contents }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
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
            message: '',
            memo: '',
        }),
        async fetch({ store, params }) {
            const book = await store.dispatch('showBookAction', params.id)
        },
        computed: {
            showBook: function () {
                return this.$store.getters.book
            }
        },
    }
</script>