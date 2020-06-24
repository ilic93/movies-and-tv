<template>
  <div class="home">
    <h1>Movies</h1>
    <b-table striped hover :items="movies">
      <template v-slot:cell(name)="data">
        <router-link :to="`/selected/movies/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
      <template v-slot:cell(starring)="data">
        {{ data.value.join(', ') }}
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['movies'])
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 2rem;
  }
</style>
