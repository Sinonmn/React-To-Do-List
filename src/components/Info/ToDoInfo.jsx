
import './ToDoInfo.css'
const ToDoInfo = (props)=>{

	const {
		className,
		total,
		deleteAllButton,
	} = props

	return(
		<div className="todo-app__info">
			<span className="todo-app__total">Total Tasks: {total}</span>
			<button  onClick={deleteAllButton} className="todo-app__delete-all">Delete All</button>
		</div>
	)
}

export default ToDoInfo