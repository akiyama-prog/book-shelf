<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        {{ data }}
      </div>

    </v-col>
  </v-row>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'

  export default {
    async asyncData({ app }) {
      const data = await app.$axios.$get('http://localhost:8000/api')
      return {
        data
      }
    }
  }
</script>