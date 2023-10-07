const app = new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    newToDo: "",
    todos: [],
  },
  methods: {
    addToDo() {
      this.todos.push({ title: this.newToDo, done: false });
    },
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    addDone() {
      this.todos.forEach((todo) => {
        todo.done = true;
      });
    },
  },
});
