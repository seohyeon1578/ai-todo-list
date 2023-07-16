import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../store/todoListState";

function TodoCreator() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const getNextId = () => {
    const lastItem = todoList[todoList.length - 1];
    return lastItem ? lastItem.id + 1 : 1;
  };

  const addItem = () => {
    const newItem = {
      id: getNextId(),
      text: inputValue,
      completed: false,
    };

    setTodoList((oldTodoList) => [...oldTodoList, newItem]);
    setInputValue("");
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoCreator;
