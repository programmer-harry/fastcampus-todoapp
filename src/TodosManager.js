import Todo from './Todo'

class TodoManager {

  constructor(todos = []) {
    this._todos = [];
    todos.forEach(todo => {
      this.addTodo(todo.contents, todo.done);
    });
  }

  get leftTodoCount() {
    return this._todos.reduce((p, c) => {
      if (c.done === false) return p + 1;
      else return p;
    }, 0);
  }

  addTodo(contents, done = false) {
    const newTodo = new Todo(contents, done);
    this._todos.push(newTodo);
    return newTodo;
  }

  getList() {
    return this._todos;
  }

}

export default TodoManager;