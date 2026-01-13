
import './ToDoFilters.css'
const ToDoFilters = (props)=>{

	const {
		setSortItems
	} = props

	return (
	<>
<div className="todo-filters">
				<button onClick={() => setSortItems('all')} className='todo-filters_all'>All</button>
				<button onClick={() => setSortItems('active')} className='todo-filters_active'>Active</button>
				<button onClick={() => setSortItems('complete')} className='todo-filters_completed'>Completed</button>
</div>
	</>)
}

export default ToDoFilters