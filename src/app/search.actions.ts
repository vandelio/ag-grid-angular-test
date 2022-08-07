export class AddSearch {
    static readonly type = '[Todo] Add';
  
    constructor(public newTodo: string) {
    }
  }
  
  export class EmptySearch {
    static readonly type = '[Todo] Empty';
  }