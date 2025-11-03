const service = require('./service');

exports.getTodos = (req, res) => {
  res.json(service.getAll());
};

exports.getTodo = (req, res) => {
  const todo = service.getById(req.params.id);
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { title, completed } = req.body || {};
  const todo = service.create({ title, completed });
  res.status(201).json(todo);
};

exports.updateTodo = (req, res) => {
  const updated = service.update(req.params.id, req.body || {});
  if (!updated) return res.status(404).json({ error: 'Not found' });
  res.json(updated);
};

exports.deleteTodo = (req, res) => {
  const ok = service.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
};
