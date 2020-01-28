import './styles.css'
import TodoApp from './src/TodoApp'

new TodoApp([
  { contents: "공부하기", done: false },
  { contents: "놀기", done: true },
  { contents: "밥먹기", done: false }
]);