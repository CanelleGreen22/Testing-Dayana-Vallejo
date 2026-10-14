const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add a la lista un usuario que no esta', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");

  expect(userController.getUsers()).not.toContain(user);

  userController.add(user);

  expect(userController.getUsers()).toContain(user);
});

  test('remove no cambia la lista si el usuario no estaba', () => {
  const userController = new UserController();
  const userA = new User(1, "Ana", "ana@generation.org");
  const userB = new User(2, "Beto", "beto@generation.org");
   userController.add(userA);
  userController.remove(userB);

  expect(userController.getUsers()).toEqual([userA]);
});

test('findByEmail devuelve el usuario cuando el email existe', () => {
  const userController = new UserController();
  const user = new User(10, "Laura", "laura@generation.org");

  userController.add(user);

  expect(userController.findByEmail("laura@generation.org")).toBe(user);
});

test('findByEmail devuelve undefined cuando el email no existe', () => {
  const userController = new UserController();
  const user = new User(10, "Laura", "laura@generation.org");

  userController.add(user);

  expect(userController.findByEmail("otro@generation.org")).toBeUndefined();
});
test('findById devuelve el usuario cuando el id existe', () => {
  const userController = new UserController();
  const user = new User(10, "Laura", "laura@generation.org");

  userController.add(user);

  expect(userController.findById(10)).toBe(user);
});

test('findById devuelve undefined cuando el id no existe', () => {
  const userController = new UserController();
  const user = new User(10, "Laura", "laura@generation.org");

  userController.add(user);

  expect(userController.findById(99)).toBeUndefined();
});
