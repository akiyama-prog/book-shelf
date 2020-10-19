<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <h1>わたしの本棚</h1>
        </div>
      </v-col>
    </v-row>
    <v-card elevation="2" outlined v-for='b in displayBooks' :key='b.id'>
      <v-simple-table>
        <thead>
          <tr>
            <th class='text-center'>{{ b.title }} {{ b.author }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ジャンル：{{ b.genre }}</td>
          </tr>
          <tr>
            <td>読了日：{{ b.finish_date }}</td>
          </tr>
          <tr>
            <td>読書メモ：{{ b.memo }}</td>
          </tr>
          <tr>
            <td>感想：{{ b.content }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
  import store from '../store';

  const maxScore = 6;
  const scoresRange = [...Array(maxScore).keys()]

  export default {
    data: () => ({
      title: '',
      author: '',
      genre: '',
      is_done: false,
      contents: '',
      items: scoresRange,
      scores: '',
      message: ''
    }),
    async fetch({ store }) {
      const books = await store.dispatch('getBookAction')
      store.commit('getBook', books)
    },
    computed: {
      displayBooks: function () {
        //ゲッターの呼び出し
        return this.$store.getters.list
      },
    },
  }
</script>