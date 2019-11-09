<template>
<div id="app">
  <h1>GraphQL Notes</h1>
  <div class="add-note">
    <h3>Add Note</h3>
    <input v-model="newTitle" placeholder="Title">
    <textarea v-model="newContent" placeholder="Content"></textarea>
    <button @click="addNote">Save</button>
  </div>
    <AllNotes v-bind:notes="allNotes" />
  </div>
</template>

<script>
import AllNotes from './components/AllNotes.vue'
//import AddNote from './components/AddNote.vue'

import gql from 'graphql-tag'

const NOTES_QUERY = gql`query {
allNotes {
_id
title
content
date
}
}`;
const NEW_NOTE = gql`
mutation createNote($title: String!, $content: String!) {
createNote(input: { title: $title, content: $content }) {
_id
title
content
date
}
}
`;

export default {
  name: 'app',
  components: {
AllNotes,
//AddNote
  },
  data() {
return {
allNotes: [],
newTitle: '',
newContent: ''}
},
apollo: {
allNotes: NOTES_QUERY,
},
methods: {
addNote: function() {
const newTitle = this.newTitle;
const newContent = this.newContent;
this.newTitle = '';
this.newContent = '';
this.$apollo.mutate({
mutation: NEW_NOTE,
variables: {
title: newTitle,
content: newContent
}
})
}
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
