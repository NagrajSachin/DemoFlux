import dispatcher from '../dispatcher';

// Synchronous Action
export function createTodoActionCreator(text){
    // dispatching the action with payload - text
    dispatcher.dispatch({ type: 'CREATE_TODO', text });
}

// Asynchronous Action
// Simulating AJAX
export function reloadTodoActionCreator(){
    setTimeout(() => {
        dispatcher.dispatch({ type: 'RECEIVE_TODOS', todos: [
            {
                id: 453423,
                text: 'Do warm up',
                complete: false
            },
            {
                id: 675656,
                text: 'Play Football',
                complete: false
            },
            {
                id: 453413,
                text: 'Do warm up',
                complete: false
            }
        ]});
    }, 2000);
}