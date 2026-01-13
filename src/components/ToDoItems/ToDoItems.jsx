import ToDoItem from "../ToDoItem/ToDoItem"

const ToDoItems =  (props)=>{
const {
	items,
	toggleComplete,
} = props
	return(
		<div className="todo-app__items">
			{items.map(item =>
				<ToDoItem 
				key = {item.id}
				label = {item.label}
				complete={item.complete}
				id={item.id}
				toggleComplete={toggleComplete}
				/>
			)}
		</div>
	)
}

export default ToDoItems