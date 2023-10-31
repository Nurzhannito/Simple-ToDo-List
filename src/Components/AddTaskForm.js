import React, { useState } from "react";

const AddTaskForm = ({ ToDos, setTodos }) => {

    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        if (userInput) {
            e.preventDefault();
            setTodos([...ToDos, {
                title: userInput,
                id: Math.random().toString(36).substring(2, 9)
            }])
            setUserInput("")
        }

        else {
            e.preventDefault();
            alert(`Пожалуйста заполните поле`);
        }
    }

    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={userInput}
                type="text"
                placeholder="Введите значение..."
                onChange={handleChange} />
            <button>Сохранить</button>
        </form>
    )
}

export default AddTaskForm