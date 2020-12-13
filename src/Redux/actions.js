import { ADD_TODO, TOGGLE_STATUS, FILTER_TODOS } from "./actionTypes";
import { v4 as uuid } from "uuid";

export const addTask = (payload) => ({
  type: ADD_TODO,
  payload: {
    id: uuid(),
    title: payload.title,
    tag: payload.tag,
    status: false,
  },
});

export const taskCompleted = (payload) => ({
  type: TOGGLE_STATUS,
  payload,
});

export const filterTodo = (payload) => ({
  type: FILTER_TODOS,
  payload,
});
