export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo, index) {
        return (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h2>Title: {todo.title}</h2>
            <p>Description: {todo.description}</p>
            <p>Date: {todo.date}</p>
            <button>
              {todo.status === true ? "Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
