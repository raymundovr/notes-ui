<template>
<div id="app">
  <h1>GraphQL Notes</h1>
    <AllNotes v-bind:notes="notes" />
  </div>
</template>

<script>
import AllNotes from './components/AllNotes.vue'

export default {
  name: 'app',
  components: {
    AllNotes
  },
  data: function () {
return { notes: [{
id: 'one',
      title: "One",
      content: "Content one",
      date: new Date()
    }]
  }}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
