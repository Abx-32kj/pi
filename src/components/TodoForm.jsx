import { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault();
        if (!value) return;
        addTodo(value, category);
        setValue("");
        setCategory("");

    };

    return <div className="todo-form">
       

        <form onSubmit={handleSubmit}>
            <input type="text"
                placeholder="Digite o Título"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
            <button type='submit'>Criar Tarefa</button>
        </form>
    </div>
}

export default TodoForm;