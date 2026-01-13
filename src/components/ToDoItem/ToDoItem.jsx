import './ToDoItem.css'

const ToDoItem = (props) => {
	const{
		className,
		label,
		complete,
		id,
		toggleComplete,
		deleteTask
	} = props
	return (
		<>
		
			<div onClick={() => toggleComplete(id)} key={id} className={`${className} todo-app__item`} >
				<label style={{ cursor: 'pointer' }} onClick={(e) => {
					e.preventDefault();
				}} className="todo-app__label">
					<input style={{ cursor: 'pointer' }}
						type="checkbox"
						className="todo-app__checkbox"
						checked={complete}
						readOnly
					/>
					<span className={complete ? 'todo-app__text todo-app__text--completed' : 'todo-app__text'}>
						{label}
					</span>
				</label>
				<button onClick={() => deleteTask(id)} className='todo-app_delete-button'>X</button>
			</div>
		</>
	);
};

export default ToDoItem;
