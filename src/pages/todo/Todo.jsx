import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
// import {addTodoAction , deleteTodoAction} from "../../redux/config"
import { addTodo, deleteTodo } from "../../redux/features/todoslice";
import "./Todo.css";
function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const onAddTodo = (task) => {
    // dispatch(addTodoAction(task))
    dispatch(addTodo(task));
  };

  const onDeleteTodo = (index) => {
    // dispatch(deleteTodoAction(index))
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      <div className="text-center py-2 todo-wrapper" style={{backgroundColor:"#4ecdc4"}}>
        <TodoForm addTodo={onAddTodo} />
      </div>
      <div className="text-center py-2 todo-wrapper">
        <TodoList todos={todos} deleteTodo={onDeleteTodo} />
      </div>
    </div>
  );
}

export default Todo;
