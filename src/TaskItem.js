import React from 'react';

function TaskItem({ task, handleDelete, toggleTask }) {
    console.log(task);
    return (
        <div className='task-item'>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}    
            />
            <span
                onClick={() => toggleTask(task.id)}
                style={{ textDecoration: task.completed ? 'line-through' : 'none', 
                    cursor: "pointer"
                }}
            >
                {task.text}
            </span>
            <button onClick={() => handleDelete(task.id)}>✖</button>
        </div>
    )
}

export default TaskItem;