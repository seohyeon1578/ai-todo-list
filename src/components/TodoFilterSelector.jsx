import React from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../store/filterState";

function TodoFilterSelector() {
  const [filter, setFilter] = useRecoilState(filterState);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filter">Filter: </label>
      <select id="filter" value={filter} onChange={handleFilterChange}>
        <option value="all">Show All</option>
        <option value="completed">Show Completed</option>
        <option value="uncompleted">Show Uncompleted</option>
      </select>
    </div>
  );
}

export default TodoFilterSelector;
