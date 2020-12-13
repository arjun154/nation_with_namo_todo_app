import { ADD_TODO, TOGGLE_STATUS, FILTER_TODOS } from "./actionTypes";
import { loadTodos, saveData } from "../Utils/TodoLocalStorage";

const initState = {
  todos: loadTodos("tasks") || [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      let task = [payload, ...state.todos];
      saveData("tasks", task);
      return {
        ...state,
        todos: task,
      };
    case TOGGLE_STATUS:
      let item = state.todos.find((item) => item.id === payload);
      item.status = !item.status;
      let tasks = state.todos.filter((task) =>
        task.id === payload ? item : task
      );
      saveData("tasks", tasks);
      return {
        ...state,
        todos: tasks,
      };

    default:
      return state;
  }
};

export default reducer;
