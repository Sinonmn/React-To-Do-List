import { useState } from "react";
import Form from "../Form/Form";
import ToDoInfo from "../Info/ToDoInfo";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoItems from "../ToDoItems/ToDoItems";
import './ToDo.css';
import {v4 as uuidv4} from 'uuid';

const ToDo = ()=>{

const [text, setText] = useState('');
const [items, setItems] = useState([]);

const handleAdd = ()=>{
	const trimmedText = text.trim();
	if(!trimmedText) return;
	const exists = items.some(item => item.label.toLowerCase() === trimmedText.toLowerCase())
	if(exists) return;
	const newItem = {
		id: uuidv4(),
		label: text,
		complete: false,
	};

	setItems(items => [...items, newItem]);
	setText('');
}

const toggleComplete = (id)=>{
	setItems(prevItems =>
		prevItems.map(item => item.id === id ? {...item, complete: !item.complete} : item)
	)

}

const deleteAllButton = ()=>{
setItems([])
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
				total={items.length}
				deleteAllButton = {deleteAllButton}
			/>

			{}
			<ToDoItems
				toggleComplete={toggleComplete}
			items={items}/>
		</div>
	)
}

export default ToDo;