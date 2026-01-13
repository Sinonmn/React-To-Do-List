import './App.css';
import Form from './components/Form/Form';
import ToDoInfo from './components/Info/ToDoInfo';
import ToDoItem from './components/ToDoItem/ToDoItem';


function App() {
	return (
		<div className="todo-app">
			<h1 className="todo-app__title">To Do List</h1>

			
			<Form 
			className='todo-app__form'
			type='text'
			placeholder='New Task Title'
			hasButton = {true}
			/>
			<Form 
			className= 'todo-app__search'
			type='text'
			placeholder='Search Task'
			hasButton = {false}
			/>
			<ToDoInfo
				className='todo-app__info'
				total = '1010'
			/>

			{/* Список задач */}
			<div className="todo-app__items">
			<ToDoItem
			className='todo-app__item'
			type='checkbox'
			label='dsada'
			complete={true}/>
				<ToDoItem
					className='todo-app__item'
					type='checkbox'
					label='dsada'
					complete={false} />

			</div>
		</div>
	);
}


export default App
