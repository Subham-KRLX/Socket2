// simple in-memory todo service
let todos = [];
// service version: 1.0.0 — lightweight in-memory store

exports.getAll = () => todos;

exports.getById = (id) => todos.find(t => t.id === id);

exports.create = ({ title, completed = false }) => {
  const todo = { id: Date.now().toString(), title: title || '', completed };
  todos.push(todo);
  return todo;
};

exports.update = (id, patch) => {
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return null;
  todos[idx] = { ...todos[idx], ...patch };
  return todos[idx];
};

exports.remove = (id) => {
  const idx = todos.findIndex(t => t.id === id);
  if (idx === -1) return false;
  todos.splice(idx, 1);
  return true;
};

exports.reset = () => { todos = []; };
