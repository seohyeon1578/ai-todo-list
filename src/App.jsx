import React from "react";

const TodoList = React.lazy(() => import("./components/TodoList"));
const TodoCreator = React.lazy(() => import("./components/TodoCreator"));

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <React.Suspense fallback={<div>Loading...</div>}>
        <TodoList />
        <TodoCreator />
      </React.Suspense>
    </div>
  );
}

export default App;
