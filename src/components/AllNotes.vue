<template>
<div class="all-notes">
  <div v-for="note in notes" v-bind:key="note.id" class="note-card">
    <div class="note-header">
      {{ note.title }}
    </div>
    <div class="note-content">
      <p>{{ note.content }}</p>
    </div>
    <div class="note-footer">
      <button>Edit</button>
      <button>Delete</button>
    </div>  
  </div>
</div>
</template>

<script>
export default {
  name: 'AllNotes',
  props: {
    notes: Array
  }
}
</script>

<style>
  .note-card {
  box-shadow: 0 1px 5px 1px rgba(0,0,0,0.1);
  width: 20%;
  margin-right: 1%;
  padding: 1rem;
  }
  .note-header {
  font-size: 2rem;
  margin-bottom: 1rem;
  }
  button {
  width: 48%;
  color: #3273dc;
  font-size: 1.2rem;
  background-color: white;
  border: none;
  cursor: pointer;
  text-decoration: note;
  border: 1px solid #0A0A0A;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0 1%;
  }
  button:hover {
  color: #363636;
  }
</style>
