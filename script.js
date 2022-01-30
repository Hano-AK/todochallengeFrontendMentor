const datas = {
  datas: [],
  text: "",
  active: false,
  completed: false,

  addTodo(text) {
    if (text.trim() != "") {
      this.datas.push({
        text,
        completed: false,
      });
      this.text = "";
    }
  },

  deleteTodo(index) {
    this.datas = this.datas.filter((todo, key) => key !== index);
  },
  allTodo() {
    this.active = false;
    this.completed = false;
  },
  activeTodo() {
    this.active = true;
    this.completed = false;
    this.datas = this.datas;
  },
  completeTodo() {
    this.active = false;
    this.completed = true;
  },
};
