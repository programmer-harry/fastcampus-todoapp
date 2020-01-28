import TodosManager from './TodosManager'

class TodoApp {
  
  constructor(todos) {
    this.todosManager = new TodosManager(todos);
    this.todoElMap = new WeakMap();

    this.todoContainerEl = document.querySelector(".todo-container")
      || document.body.appendChild(document.createElement('div'));
    this.titleEl = document.querySelector(".title h2")
      || document.body.appendChild(document.createElement('div'));
    this.plusBtnEl = document.querySelector(".add-todo button");
    this.renderTodos();
    this.bindEvents();
  }

  renderTodos() {
    this.todoContainerEl.innerHTML = '';
    const todoList = this.todosManager.getList();
    for (let i = 0; i < todoList.length; i++) {
      const todoEl = this.createTodoEl(todoList[i], i);
      this.todoContainerEl.appendChild(todoEl);
    }
    this.renderTitle();
  }

  createTodoEl(todo, id) {
    const todoEl = document.createElement("div");
    todoEl.id = "todo-" + id;
    todoEl.innerHTML = '<input type="checkbox" ' + ((todo.done) ? 'checked' : '') + '> <label>' + todo.contents + '</label>';
    todoEl.className = 'todo';
    this.todoElMap.set(todoEl, todo);
    return todoEl;
  }

  addTodo(contents) {
    this.todosManager.addTodo(contents);
    this.renderTodos();
  }

  renderTitle() {
    const now = new Date();
    if (this.titleEl)
      this.titleEl.innerHTML = (now.getMonth() + 1) + '월 ' + now.getDate() + '일 <span class="left-count">(' + this.todosManager.leftTodoCount + '개)</span>';
  }

  bindEvents() {
    if (this.plusBtnEl) this.plusBtnEl.addEventListener('click', function(evt) {
      const textEl = document.querySelector('.add-todo input[type="text"]');
      this.addTodo(textEl.value);
      this.renderTodos();
      textEl.value = '';
    }.bind(this));
    this.todoContainerEl.addEventListener('click', function (evt) {
      if (evt.target.nodeName === 'INPUT' && evt.target.parentElement.className === 'todo') {
        this.todoElMap.get(evt.target.parentElement).done = evt.target.checked;        
        this.renderTitle();
      }
    }.bind(this));
  }

}

export default TodoApp;
