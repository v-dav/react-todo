import React from 'react'
import Item from './Item'

const List = ({ tasks, removeTask }) => {
	return (
		<div className='itemsList'>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<Item
							task={task}
							removeTask={removeTask}
						>
						</Item>
					</li>
				))}
			</ul>
		</div>
	)
}

export default List
