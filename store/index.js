import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    // stateでtodosという配列を設定。contentsとcreatedという変数とその値をそれぞれ格納している。
    state: () => ({
      todos: [
        { content: 'hogehoge', created: '2019-03-31 15:30' },
        { content: 'ほげほげ', created: '2020-03-31: 16:00' },
      ],
    }),
    // mutationでは、insertで入力された時間(fmt)を配列todosに追加する。
    mutations: {
      insert(state, obj) {
        const d = new Date()
        const fmt =
          d.getFullYear() +
          '-' +
          ('00' + (d.getMonth() + 1)).slice(-2) +
          '-' +
          ('00' + d.getDate()).slice(-2) +
          ' ' +
          ('00' + d.getHours()).slice(-2) +
          ':' +
          ('00' + d.getMinutes()).slice(-2)
        state.todos.unshift({
          content: obj.content,
          created: fmt,
        })
      },
      // removeでは、アラートを表示させてtodosから削除する。
      remove(state, obj) {
        for (let i = 0; i < state.todos.length; i++) {
          const ob = state.todos[i]
          if (ob.content === obj.content && ob.created === obj.created) {
            alert('remove ' + '"' + ob.content + '"')
            state.todos.splice(i, 1)
            return
          }
        }
      },
    },
  })
}

export default createStore
