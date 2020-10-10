<template>
  <section class="container">
    <h1>Todo アプリ</h1>
    <p><input v-model="content" type="text" name="content" /></p>
    <div>
      <!-- v-modelは@で省略可能。入力された値をtodosのcontentsに入れる -->
      <button @click="insert">save</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.content }}</span
        ><span>{{ todo.created }}</span
        ><span @click="remove(todo)">×</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      content: '',
    }
  },
  computed: {
    ...mapState(['todos']),
  },
  methods: {
    insert() {
      this.$store.commit('insert', { content: this.content })
      this.content = ''
    },
    remove(todo) {
      this.$store.commit('remove', todo)
    },
  },
}
</script>
