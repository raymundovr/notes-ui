<template>
  <div>
    <h3>Add Note</h3>
    <input v-model="title" placeholder="Title">
    <textarea v-model="content" placeholder="Content"></textarea>
    <button>Save</button>
  </div>
</template>

<script>
export default {
name: "AddNote",
data()  {
return {
title: '',
content: '',
}
}
}
</script>
<style>
  
</style>
