import './ToDoItem.css'

const ToDoItem = (props) => {
	const{
		className,
		label,
		complete,
		onToggle,
		id 
	} = props
	return (
		<div key={id} className={`${className} todo-app__item`} onClick={onToggle}>
			<label className="todo-app__label">
				<input
					type="checkbox"
					className="todo-app__checkbox"
					checked={complete}
					readOnly
				/>
				<span className={complete ? 'todo-app__text todo-app__text--completed' : 'todo-app__text'}>
					{label}
				</span>
			</label>
		</div>
	);
};

export default ToDoItem;
