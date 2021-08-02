import {makeAutoObservable, makeObservable, observable, action} from 'mobx';
// Domain object Todo.
class Todo {
  flag = true;

  constructor() {
    // Just call it here
    makeAutoObservable(this);
  }

  onFlag() {
    this.flag = true;
  }

  offFlag() {
    this.flag = false;
  }
}

export default new Todo();
