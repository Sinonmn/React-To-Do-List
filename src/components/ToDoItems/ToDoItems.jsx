import ToDoItem from "../ToDoItem/ToDoItem"
import './ToDoItems.css'

const ToDoItems =  (props)=>{

const {
	items,
	toggleComplete,
	totalPages,
	currentPage,
	setCurrentPage,
	deleteTask,
} = props




	return(
		<div className="todo-app__items">
			{items.map(item =>
				<ToDoItem 
					deleteTask={deleteTask}
				key = {item.id}
				label = {item.label}
				complete={item.complete}
				id={item.id}
				toggleComplete={toggleComplete}
				/>
			)}
			<div className="pagination">
				{Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
					<button
						key={page}
						onClick={() => setCurrentPage(page)}
						className={page === currentPage ? "active" : ""}
						style={{ fontWeight: page === currentPage ? "bold" : "normal" }}
					>
						
					</button>
				))}
			</div>
		</div>
	)
}

export default ToDoItems