const api = '/api/todos';

async function fetchTodos(){
  const res = await fetch(api);
  return res.json();
}

function el(tag, props = {}, ...children){
  const e = document.createElement(tag);
  Object.assign(e, props);
  children.flat().forEach(c => { if (typeof c === 'string') e.appendChild(document.createTextNode(c)); else if (c) e.appendChild(c); });
  return e;
}

async function render(){
  const list = document.getElementById('list');
  list.innerHTML = '';
  const todos = await fetchTodos();
  todos.forEach(t => {
    const left = el('div',{className:'todo-left'},
      el('span',{className: 'check' + (t.completed ? ' checked' : ''), onclick:() => toggle(t.id, !t.completed)}),
      el('span',{className:'todo-title'}, t.title)
    );
    const del = el('button', {className:'actions', onclick:()=> removeTodo(t.id)}, 'Delete');
    const li = el('li',{}, left, del);
    list.appendChild(li);
  });
}

async function addTodo(title){
  await fetch(api, {method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({title})});
  await render();
}

async function toggle(id, completed){
  await fetch(`${api}/${id}`, {method:'PUT', headers:{'content-type':'application/json'}, body:JSON.stringify({completed})});
  await render();
}

async function removeTodo(id){
  await fetch(`${api}/${id}`, {method:'DELETE'});
  await render();
}

document.getElementById('todoForm').addEventListener('submit', async (e)=>{
  e.preventDefault();
  const input = document.getElementById('title');
  const v = input.value.trim();
  if (!v) return;
  await addTodo(v);
  input.value = '';
});

render();
