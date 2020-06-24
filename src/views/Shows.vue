<template>
  <div>
    <h1>TV shows</h1>
    <b-table striped hover :items="shows">
      <template v-slot:cell(name)="data">
        <router-link :to="`/selected/shows/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
      <template v-slot:cell(starring)="data">
        {{ data.value.join(', ') }}
      </template>
      <template v-slot:cell(concluded)="data">
        {{ data.value ? 'yes' : 'no' }}
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
    ...mapState(['shows'])
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 2rem;
  }
</style>
