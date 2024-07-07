import { useState } from 'react';
import './input.css';

// eslint-disable-next-line react/prop-types
const Input = ({ onSubmit }) => {
    const [input, setInput] = useState('');
    const handleSubmit = () => {
        if (!input) return;
        onSubmit(input);
        setInput('');
    }

    return (
        <div className='container'>
            <input type='text' className='input' value={input} onChange={(e) => setInput(e.target.value)} placeholder='please write a task...' />
            <button className='button' onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default Input;