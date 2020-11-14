import Vuex from 'vuex'


const store = () => {
    return new Vuex.Store({
        state: () => ({
            books: [],
        }),
        getters: {
            list(state) {
                return state.books
            },
            book(state) {
                return state
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
                state.id = data.id,
                    state.title = data.title,
                    state.author = data.author,
                    state.genre = data.genre,
                    state.contents = data.contents,
                    state.scores = data.scores,
                    state.message = data.message,
                    state.memo = data.memo,
                    state.finish_date = data.finish_date
            },
            deleteBook(state, data) {
                state.books.forEach((books, index) => {
                    if (books.id === data.id) {
                        state.books.splice(index, 1)
                    }
                })
            },
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
                const response = await this.$axios.$get(`/books/${bookId}`)
                    .catch(err => {
                        console.log(err);
                    })
                commit('showBook', response)
            },
            async deleteAction({ commit }, bookId) {
                const response = await this.$axios.$delete(`books/${bookId}`)
                    .catch(err => {
                        console.log(err);
                    })
                commit('deleteBook', response)
            }
        }
    })
}
export default store