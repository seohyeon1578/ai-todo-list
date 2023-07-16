import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../store/todoListStatsState";
import { filteredTodoListState } from "../store/filteredTodoListState";
import TodoItem from "./TodoItem";
import TodoFilterSelector from "./TodoFilterSelector";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  const todoListStats = useRecoilValue(todoListStatsState);

  return (
    <div>
      <p>Total items: {todoListStats.totalNum}</p>
      <p>Completed items: {todoListStats.totalCompletedNum}</p>
      <p>Uncompleted items: {todoListStats.totalUncompletedNum}</p>
      <p>Percent completed: {todoListStats.percentCompleted}%</p>

      <TodoFilterSelector />

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default TodoList;
