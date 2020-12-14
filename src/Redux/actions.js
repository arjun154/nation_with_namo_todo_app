import { ADD_TODO, TOGGLE_STATUS, CLEAR_TODOS } from "./actionTypes";
import { v4 as uuid } from "uuid";

export const addTask = (payload) => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    title: payload,
    status: false,
  },
});

export const taskCompleted = (payload) => ({
  type: TOGGLE_STATUS,
  payload,
});

export const clearTodo = () => ({
  type: CLEAR_TODOS,
});
