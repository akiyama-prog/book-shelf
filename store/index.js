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
            getBook(state, data) {
                state.books = data
            }
        },
        actions: {
            async addBookAction({ commit }, data) {
                const response = await this.$axios.$post('/books', data)
                    .catch(err => {
                        console.log(err);
                    })
                commit('addBook', response)
            },
            async getBookAction() {
                return await this.$axios.$get('/books')
                    .catch(err => {
                        console.log(err);
                    })
            },
        }
    })
}
export default store