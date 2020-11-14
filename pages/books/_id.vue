<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th>
                        <h1>{{ showBook.title }}</h1>
                    </th>
                    <td>
                        <v-btn @click="deleteBook(showBook.id)" icon>
                            <v-icon>mdi-trash-can-outline</v-icon>
                        </v-btn>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        <h2>{{ showBook.author }}</h2>
                    </th>
                </tr>
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
        validate({ params }) {
            return /^\d+$/.test(params.id)
        },
        data: () => ({
            id: '',
            title: '',
            author: '',
            genre: '',
            contents: '',
            scores: '',
            message: '',
            memo: '',
            items: [
                { icon: 'mdi-trash-can-outline', function: 'delete(showBook.id)' }
            ]
        }),
        async fetch({ store, params }) {
            const book = await store.dispatch('showBookAction', params.id)
        },
        computed: {
            showBook: function () {
                return this.$store.getters.book
            }
        },
        methods: {
            async deleteBook(bookId) {
                await this.$store.dispatch('deleteAction', bookId)
                this.$router.push('/books/')
            }
        }
    }
</script>