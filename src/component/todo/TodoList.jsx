const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div className="d-flex align-items-center justify-content-between border border rounded-2 m-4 bg-secondary text-white" key={i}>
            <ul className="my-2 ">
              <li className=" d-flex">
                <div className="text">
                  <p className="my-3">Title : {todo.title}</p>
                  <p>Content : {todo.content}</p>
                </div>
              </li>
            </ul>
            <button className="btn btn-danger m-4" onClick={()=>deleteTodo(i)}>x</button>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left container">
      <h5 className="my-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
