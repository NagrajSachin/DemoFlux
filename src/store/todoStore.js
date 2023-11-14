import EventEmitter from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor() {
        super();

        this.todos = [
            {
                id: 111112222,
                text: 'Go Swimming',
                complete: false
            },
            {
                id: 23232323,
                text: 'Play Cricket',
                complete: true
            },
            {
                id: 33232332,
                text: 'Watch Movie',
                complete: false
            }
        ];
    }

    getAll() {
        return this.todos;
    }

    createTodo(text) {
        const id = Date.now();

        this.todos.push({
            id,
            text,
            complete: false
        });

        // raise an event
        this.emit('change'); // raising or publishing a custom event 'change'
    }

    // callback that will be registered with dispatcher
    handleActions(action) {
        console.log('TodoStore received an action', action);

        switch(action.type) {
            case 'CREATE_TODO':
                this.createTodo(action.text);
                break;
            case 'RECEIVE_TODOS':
                this.todos = action.todos;
                this.emit('change');
                break;
            default:
                break;
        }
    }
}

let todoStore = new TodoStore();

// dispatcher - register and dispatch
// dispatcher.register will register with callback provided by store
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;