import { useState } from "react";
import Form from "../Form/Form";
import ToDoInfo from "../Info/ToDoInfo";
import ToDoItem from "../ToDoItem/ToDoItem";
import './ToDo.css';
import {v4 as uuidv4} from 'uuid';

const ToDo = ()=>{

const [text, setText] = useState('');
const [items, setItems] = useState([]);

const handleAdd = ()=>{
	if(!text.trim()) return;
	const newItem = {
		id: uuidv4(),
		label: text,
		complete: false,
	};

	setItems(items => [...items, newItem]);
	setText('');
}



	return(
		<div className="todo-app">
			<h1 className="todo-app__title">To Do List</h1>


			<Form 
				className='todo-app__form'
				type='text'
				placeholder='New Task Title'
				hasButton={true}
				text = {text}
				setText = {setText}
				items = {items}
				handleAdd = {handleAdd}
			/>
			<Form
				className='todo-app__search'
				type='text'
				placeholder='Search Task'
				hasButton={false}
			/>
			<ToDoInfo
				className='todo-app__info'
				total='1010'
			/>

			{/* Список задач */}
			<div className="todo-app__items">
				<ToDoItem
					className='todo-app__item'
					type='checkbox'
					label='dsada'
					complete={true} />
				<ToDoItem
					className='todo-app__item'
					type='checkbox'
					label='dsada'
					complete={false} />

			</div>
		</div>
	)
}

export default ToDo;