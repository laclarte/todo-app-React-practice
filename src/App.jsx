import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (!inputValue) return;
    const newTodo = { id: Date.now(), text: inputValue, completed: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleReorder = (newTodos) => {
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col justify-stretch mx-auto w-[85%]">
      <h1 className="text-[48px] font-bold text-slate-700 pt-14 pb-8">ToDo List</h1>
      <div className="flex justify-center mx-6">
        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onAdd={handleAdd}
        />
      </div>
      <ul className="flex justify-center px-6">
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onReorder={handleReorder}
        />
      </ul>
    </div>
  );
}

export default App;