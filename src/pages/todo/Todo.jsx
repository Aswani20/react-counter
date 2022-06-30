import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import TodoForm from "../../component/todo/TodoForm";
import TodoList from "../../component/todo/TodoList";
import {addTodoAction , deleteTodoAction} from "../../redux/"
import './Todo.css';
function Todo() {

  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)


  const addTodo = (task) => {
    dispatch(addTodoAction(task))
  };

  const deleteTodo = (index) => {
    dispatch(deleteTodoAction(index))
    
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
