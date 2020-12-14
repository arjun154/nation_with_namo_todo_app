import { ADD_TODO, TOGGLE_STATUS, CLEAR_TODOS } from "./actionTypes";
import { loadTodos, saveTodos, clearTodos } from "../Utils/TodoLocalStorage";

const initState = {
  todos: loadTodos("tasks") || [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      let task = [payload, ...state.todos];
      saveTodos("tasks", task);
      return {
        ...state,
        todos: task,
      };
    case TOGGLE_STATUS:
      let item = state.todos.find((item) => item.id === payload);
      item.status = !item.status;
      let tasks = state.todos.filter((task) => task.id !== payload);
      tasks = [item, ...tasks];
      saveTodos("tasks", tasks);
      return {
        ...state,
        todos: tasks,
      };
    case CLEAR_TODOS:
      clearTodos("tasks");
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

export default reducer;
