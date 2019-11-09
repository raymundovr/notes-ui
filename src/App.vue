<template>
<div id="app">
  <h1>GraphQL Notes</h1>
    <AllNotes v-bind:notes="allNotes" />
  </div>
</template>

<script>
import AllNotes from './components/AllNotes.vue'
import gql from 'graphql-tag'

export default {
  name: 'app',
  components: {
    AllNotes
  },
  data() {
return {
  allNotes: [] }
},
apollo: {
allNotes: gql`query {
allNotes {
title
content
date
}
}`,
}
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
