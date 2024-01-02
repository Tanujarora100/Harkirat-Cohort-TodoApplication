export function CreateTodo() {
  return (
    <>
    <div style={{display:'flex'}}>
      <input
        style={{ padding: 6, margin: 5 }}
        type="text"
        placeholder="Title"
      />
      <br />
      <input
        style={{ padding: 6, margin: 5 }}
        type="text"
        placeholder="Date"
      />
       <input
        style={{ padding: 6, margin: 5 }}
        type="text"
        placeholder="Description"
      />
      <br />
      <button>Add Todo</button>
      </div>
    </>
  );
}
