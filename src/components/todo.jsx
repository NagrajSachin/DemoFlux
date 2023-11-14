import React from 'react';

// Presentational Component
const Todo = (props) => {
    const {complete, text} = props; // destructuring
    const icon = complete ? '\u2705' : '\u2718'; 

    return (
        <li className='list-unstyled display-6 text-primary'>
            <span style={{margin: '10px'}}>{text}</span>
            <span style={{margin: '10px'}}>{icon}</span>
        </li>
    )
}

export default Todo;