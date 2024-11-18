import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, handleDelete, toggleTask }) {  
    console.log(tasks);  
    return (
        <div className="task-container">
            <div className="task-box">
                <ul>
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            handleDelete={handleDelete}
                            toggleTask={toggleTask}
                        />
                    ))}
                  </ul>
            </div>
        </div>
    );
}

export default TaskList;