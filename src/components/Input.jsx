import React, { useState } from "react";

const Input = ({ onAddTask }) => {
	const [taskText, setTaskText] = useState("");
	const [alert, setAlert] = useState("");

	const handleAddTask = () => {
		if (taskText.trim()) {
			onAddTask(taskText);
			setTaskText("");
			if (alert) {
				setAlert('');
			}
		} else {
			setAlert("To-do cannot be empty, please write something")
		}
	}

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				id="text"
				placeholder="Add a to-do task..."
				onChange={(event) => setTaskText(event.target.value)}
				value={taskText}
			/>
			<button
				type="button"
				className="add"
				onClick={handleAddTask}
			>Add</button>
			<p style={{ color: "red" }}>{ alert }</p>
		</form>
	)
}

export default Input;
