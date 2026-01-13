import ToDoItem from "../ToDoItem/ToDoItem"

const ToDoItems =  (props)=>{
const {
	items,
} = props
	return(
		<div className="todo-app__items">
			{items.map(item =>
				<ToDoItem
				label = {item.label}
				complete={item.complete}
				
				/>
			)}
		</div>
	)
}

export default ToDoItems