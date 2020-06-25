<template>
  <div class="home">
    <h1>Movie and tv show collection</h1>
    <p>See our titles or add your own</p>
    <p>Click on button to add new title:</p>
    <button class="btn btn-primary" @click="toggleForm()">Add now!</button>
    <b-form @submit.prevent="onSubmit" v-if="showForm">

      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Type:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="form.type"
          :options="['movies', 'shows']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Stars:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.stars"
          required
          placeholder="Enter lead actors/actresses"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Genre:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.genre"
          required
          placeholder="Enter genre of movie/tv show"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="TV show info" v-if="form.type=='shows'">
        <b-form-group label-cols-lg="4" label="Number of seasons:" label-for="input-horizontal-1">
          <b-form-input id="input-horizontal-1" v-model="form.seasons" required type="number" min="1"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-lg="4" label="Number of episodes:" label-for="input-horizontal-2">
          <b-form-input id="input-horizontal-2" v-model="form.episodes" required type="number" min="1"></b-form-input>
        </b-form-group>
        <b-form-checkbox v-model="form.concluded" value="true" unchecked-value="false">Concluded</b-form-checkbox>
      </b-form-group>

      <b-form-group id="input-group-6" label="Movie info" v-if="form.type=='movies'">
        <b-form-group label-cols-lg="4" label="Director:" label-for="input-horizontal-3">
          <b-form-input id="input-horizontal-3" v-model="form.director" required placeholder="Director of movie"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-lg="4" label="Year of release:" label-for="input-horizontal-4">
          <b-form-input id="input-horizontal-4" v-model="form.year" required type="number" min="1900" max="2020"></b-form-input>
        </b-form-group>
        <b-form-group label-cols-lg="4" label="Runtime:" label-for="input-horizontal-5">
          <b-form-input id="input-horizontal-5" v-model="form.duration" required placeholder="Enter runtime in minutes"></b-form-input>
        </b-form-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showForm: false,
      form: {
        name: '',
        type: '',
        stars: '',
        genre: '',
        concluded: false,
        episodes: 1,
        seasons: 1,
        year: 1900,
        director: '',
        duration: ''
      }
    }
  },
  methods: {
    ...mapActions(['addTitle']),
    toggleForm () {
      this.showForm = !this.showForm
    },
    onSubmit () {
      const { name, type, stars, genre, concluded, episodes, seasons, year, duration, director } = this.form
      const starring = []
      starring.push(stars)

      if (type === 'shows') {
        this.addTitle({ type, title: { name, starring, genre, concluded, episodes, seasons } })
      } else {
        this.addTitle({ type, title: { name, starring, genre, year, duration, director } })
      }

      this.form = {
        name: '',
        type: '',
        stars: '',
        genre: '',
        concluded: false,
        episodes: 1,
        seasons: 1,
        year: 1900,
        director: '',
        duration: ''
      }
    }
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 1.5rem;
  }
  .btn {
    margin: 15px;
  }
</style>
