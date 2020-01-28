class Todo {
  constructor(contents, done) {
    this.contents = contents;
    this.done = done;
  }
  toggle() {
    this.done = !this.done;
  }
}

export default Todo;
