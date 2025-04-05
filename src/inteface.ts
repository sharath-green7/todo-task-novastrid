export interface TodoInterface {
    id: string;
    todo: string;
    completed: boolean;
}

export interface TodoFormInterface {
    todos?: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}

export interface TodoListInterface {
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    todos: TodoInterface[];
}

export interface TodoItemInterface {
    handleTodoRemove: (id: string) => void;
    handleTodoComplete: (id: string) => void;
    todo: TodoInterface;
}