<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <h1>わたしの本棚</h1>
        </div>
      </v-col>
    </v-row>
    <v-form>
      <v-text-field v-model='title' label='タイトル' required></v-text-field>
      <v-text-field v-model='author' label='作者' required></v-text-field>
      <v-radio-group v-model='genre'>ジャンル
        <v-radio label='小説' value='小説'></v-radio>
        <v-radio label='自己啓発' value='自己啓発'></v-radio>
        <v-radio label='ビジネス' value='ビジネス'></v-radio>
        <v-radio label='不動産' value='不動産'></v-radio>
        <v-radio label='マネー' value='マネー'></v-radio>
        <v-radio label='その他' value='その他'></v-radio>
      </v-radio-group>
      <v-checkbox v-model='is_done' label='読み終わった場合はチェック'></v-checkbox>
      <v-textarea v-model='contents' label='感想' required>
      </v-textarea>
      <v-select v-model="scores" :items='items' label='評価'></v-select>
      <v-btn elevation='2' @click="addBook">登録</v-btn>
    </v-form>
    <!-- error message -->
    <p v-if="message">{{ message }}</p>
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
    methods: {
      addBook() {
        //storeのaction呼び出し
        this.$store.dispatch('addBookAction', {
          title: this.title,
          author: this.author,
          genre: this.genre,
          is_done: this.is_done,
          contents: this.contents,
          scores: this.scores,
          message: this.message,
        }),
          this.title = '',
          this.author = '',
          this.genre = '',
          this.is_done = false,
          this.contents = '',
          this.items = ['1', '2', '3', '4', '5'],
          this.message = ''
      },
    },
    async asyncData({ app }) {
      const data = await app.$axios.$get('http://localhost:8000/api/books/')
      return {
        data
      }
    }
  }
</script>