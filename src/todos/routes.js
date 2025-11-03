const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

router.get('/', ctrl.getTodos);
router.post('/', ctrl.createTodo);
router.get('/:id', ctrl.getTodo);
router.put('/:id', ctrl.updateTodo);
router.delete('/:id', ctrl.deleteTodo);

module.exports = router;
