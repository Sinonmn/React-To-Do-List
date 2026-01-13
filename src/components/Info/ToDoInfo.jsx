
import './ToDoInfo.css'
const ToDoInfo = (props)=>{

	const {
		className,
		total,
	} = props

	return(
		<div className="todo-app__info">
			<span className="todo-app__total">Total Tasks: {total}</span>
			<button className="todo-app__delete-all">Delete All</button>
		</div>
	)
}

export default ToDoInfo