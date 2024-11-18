import React, { useState } from 'react';

function TaskInput({ setTask}) {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTask(inputValue);
            setInputValue(''); // this will clear the input field

        }
    };
    
    return (
        <form className='task-input' onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder='What needs to be done?'
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
        // pov, kinukompleto agad ni copilot yung code (pati comment ko bai syett talaga)
        // di ko na alam kung matutuwa ba ako
    )
}

export default TaskInput;