import { useEffect, useState} from 'react';
import Todo from './todo';
import todoStore from '../store/todoStore';
import { createTodoActionCreator, reloadTodoActionCreator} from '../Actions/todoActions';

// Controller View / Container Component
const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [val, setVal] = useState('');

    const getTodos = () => {
        // grabbing the state from store
        setTodos([...todoStore.getAll()]);
    }

    useEffect(() => {
        // grabbing the state from store
        setTodos([...todoStore.getAll()]);

        // subscribing to the 'change' event of todoStore
        todoStore.on('change', getTodos);

        // unsubscribing
        return () => {
            // release the resource
            todoStore.off('change', getTodos);
        }
    }, []);

    const createTodoFun = () => {
        let txt = document.getElementById('todoInput').value;
        createTodoActionCreator(txt);
        setVal('');
        document.getElementById('todoInput').focus();
    }

    const reloadTodoFun = () => {
        reloadTodoActionCreator();
    }

    const TodosComponent = todos.map((todo) => <Todo key={todo.id} {...todo} />);

    return (
        <div>
            <span style={{fontWeight: 'bolder'}}>Todo</span>:- <input type="text" id="todoInput" value={val} onChange={(evt) => {
                setVal(evt.target.value);
            }}/>
            <button className="btn btn-warning btn-outline-dark" style={{margin: '10px'}} onClick={createTodoFun}>Create Todo!</button><br />
            <button className="btn btn-warning btn-outline-dark" style={{margin: '10px'}} onClick={reloadTodoFun}>Reload Todos!</button><br />
            <h1>Todos</h1>
            <ul>
                { TodosComponent }
            </ul>
        </div>
    )
}

export default Todos;