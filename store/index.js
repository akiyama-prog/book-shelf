import Vuex from 'vuex'


const store = () => {
    return new Vuex.Store({
        state: () => ({
            books: []
        }),
        getters: {
            list(state) {
                return state.books
            }
        },
        mutations: {
            addBook(state, data) {
                state.books.push({
                    title: data.title,
                    author: data.author,
                    genre: data.genre,
                    memo: data.memo,
                    is_done: data.is_done,
                    finish_date: data.finish_date,
                    contents: data.contents,
                    scores: data.scores
                })
            },
            getBooks(state, data) {
                state.books = data
            },
            showBook(state, data) {
                state.books({
                    title: data.title,
                    author: data.author,
                    genre: data.genre,
                    contents: data.contents,
                    scores: data.scores,
                    message: data.message
                })
            }
        },
        actions: {
            async addBooksAction({ commit }, data) {
                const response = await this.$axios.$post('/books', data)
                    .catch(err => {
                        console.log(err);
                    })
                commit('addBook', response)
            },
            async getBooksAction() {
                return await this.$axios.$get('/books')
                    .catch(err => {
                        console.log(err);
                    })
            },
            async showBookAction({ commit }, bookId) {
                const response = await this.$axios.$get(`/books/${bookId}`, bookId)
                    .catch(err => {
                        console.log(err);
                    })
                commit('showBook', response)
            },
        }
    })
}
export default store