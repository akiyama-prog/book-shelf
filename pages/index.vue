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
      <v-select :items='scores' label='評価'></v-select>
      <v-btn elevation='2' @click="addBook">登録</v-btn>
    </v-form>
    <!-- error message -->
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import { mapState } from 'vuex';
  import { mapActions } from 'vuex';
  import store from '../store';

  export default {
    data: () => ({
      title: '',
      author: '',
      genre: '',
      is_done: false,
      contents: '',
      scores: ['1', '2', '3', '4', '5'],
      message: ''
    }),
    methods: {
      addBook() {
        this.$store.dispatch('addBookAction', {
          title: this.title,
          author: this.author,
          genre: this.genre,
          is_done: this.is_done,
          contents: this.contents,
          scores: this.scores,
          message: this.message,
        })//storeのaction呼び出し
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