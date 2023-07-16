import { useRecoilState } from "recoil";
import { todoListState } from "../store/todoListState";

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = (event) => {
    const newList = todoList.map((todoItem) => {
      if (todoItem.id === item.id) {
        return {
          ...todoItem,
          text: event.target.value,
        };
      }
      return todoItem;
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = todoList.map((todoItem) => {
      if (todoItem.id === item.id) {
        return {
          ...todoItem,
          completed: !todoItem.completed,
        };
      }
      return todoItem;
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((todoItem) => todoItem.id !== item.id);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default TodoItem;
