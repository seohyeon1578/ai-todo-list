import { selector } from "recoil";
import { todoListState } from "./todoListState";
import { filterState } from "./filterState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(filterState);
    const todoList = get(todoListState);

    switch (filter) {
      case "completed":
        return todoList.filter((item) => item.completed);
      case "uncompleted":
        return todoList.filter((item) => !item.completed);
      default:
        return todoList;
    }
  },
});
