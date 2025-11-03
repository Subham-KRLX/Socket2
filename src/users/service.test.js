const service = require('./service');

beforeEach(() => {
  service.reset();
});

test('getAll returns an empty array initially', () => {
  expect(service.getAll()).toEqual([]);
});

test('create adds a user and getAll returns it', () => {
  const user = service.create({ name: 'Alice' });
  expect(user).toHaveProperty('id');
  expect(user.name).toBe('Alice');
  const all = service.getAll();
  expect(all).toContainEqual(user);
});
