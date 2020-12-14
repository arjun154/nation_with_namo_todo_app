export const loadTodos = (key) => {
  try {
    let tasks = JSON.parse(localStorage.getItem(key));
    return tasks;
  } catch (err) {
    return undefined;
  }
};

export const saveTodos = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const clearTodos = (key) => {
  localStorage.clear(key);
};
