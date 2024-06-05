import { useState } from 'react'
import './styles/index.css'
import Input from './components/Input'
import List from './components/List'
import ToDoTextImg from './assets/todoimg.png'
import GitHub from './assets/github.png'

function App() {
	const [tasks, setTasks] = useState([]);

	const AddTask = (task) => {
		const newTasks = [...tasks, task];
		setTasks(newTasks);
	}

	const removeTask = (taskToRemove) => {
		const updatedTasks = tasks.filter(task => task != taskToRemove);
		setTasks(updatedTasks);
	}

	return (
		<div className="container">
			<Input onAddTask={AddTask}></Input>
			<List tasks={tasks} removeTask={removeTask}></List>
			<img src={ToDoTextImg} alt="Description" className="img-text"></img>
			<a href="https://github.com/v-dav" target="_blank" rel="noopener noreferrer">
				<img src={GitHub} alt="Description" className="img-github"></img>
			</a>
		</div>
	)
}

export default App
