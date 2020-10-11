import Vuex from 'vuex'


const store = () => {
    return new Vuex.Store({
        state: () => ({
            books: []
        }),
        mutations: {
            addBook(state, data) {
                state.books.push({
                    title: data.title,
                    author: data.author,
                    genre: data.genre,
                    memo: data.memo,
                    is_done: data.is_done,
                    contents: data.contents,
                    scores: data.scores
                })
            }
        },
        actions: {
            async addBookAction({ commit }, data) {
                const response = await this.$axios.$post('/books', data)
                    .catch(err => {
                        console.log(err);
                    })
                commit('addBook', response)
            }
        }
    })
}
export default store