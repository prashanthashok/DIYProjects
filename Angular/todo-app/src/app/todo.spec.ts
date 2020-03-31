import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept new values', () => {
    let newToDo = new Todo({title: 'hello',
     complete: true});
     expect(newToDo.title).toEqual('hello');
     expect(newToDo.complete).toEqual(true);
  });
});
