<template>
  <div>
    <h1>{{ display.name }}</h1>
    <p>Genre: {{ display.genre }}</p>
    <p>Starring: {{ display.starring.join(', ') }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      display: {}
    }
  },
  computed: {
    ...mapState(['shows', 'movies'])
  },
  mounted () {
    const x = this[this.$route.params.type][this.$route.params.id]
    this.display = x
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
</style>
