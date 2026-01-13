import { useEffect, useState } from "react";
import Form from "../Form/Form";
import ToDoInfo from "../Info/ToDoInfo";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoItems from "../ToDoItems/ToDoItems";
import './ToDo.css';
import {v4 as uuidv4} from 'uuid';
import ToDoFilters from "../ToDoFilters/ToDoFilters";


const ToDo = ()=>{

const [text, setText] = useState('');
const [searchText, setSearchText] = useState('');
const [items, setItems] = useState([]);
const [sortItems, setSortItems] = useState('all');




useEffect(() => {
	const savedItems = JSON.parse(localStorage.getItem('todos')) || [];
	setItems(prev => savedItems);
},[])


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

	setItems(items =>{
		const updatedItems = [...items, newItem]
		localStorage.setItem('todos', JSON.stringify(updatedItems));
		return updatedItems;
	}
	);
	setText('');
}

const toggleComplete = (id)=>{
	setItems(prevItems =>
	{
		const updatedItems = prevItems.map(item => item.id === id ? { ...item, complete: !item.complete } : item);
		localStorage.setItem('todos', JSON.stringify(updatedItems));
		return updatedItems;
	}
	)

}

const deleteAllButton = ()=>{
setItems([])
}

const deleteTask = (id)=>{
	setItems(prevItems =>
	{
		
		const tasks = prevItems.filter(item => item.id !== id)
		localStorage.setItem('todos', JSON.stringify(tasks));
		return tasks
	}
	)
}

	const itemsPerPage = 5;
	const [currentPage, setCurrentPage] = useState(1);


	const filteredItems = items
	.filter(item => {
		if (sortItems === 'all') return true;
		if (sortItems === 'active') return !item.complete;
		if (sortItems === 'complete') return item.complete;
	})
	
	
	.filter(item =>
		item.label.toLowerCase().includes(searchText.toLowerCase())
	);

	const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const itemsToShow = filteredItems.slice(startIndex, endIndex);


	useEffect(() => {
		setCurrentPage(1);
	}, [searchText, sortItems]);
	




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
				text = {searchText}
				setText ={setSearchText}
			/>
			<ToDoInfo
				className='todo-app__info'
				total={items.length}
				deleteAllButton = {deleteAllButton}
			/>
			{items.length > 0 && <ToDoFilters 
				setSortItems={setSortItems}
			/>}

			{}
			<ToDoItems
				deleteTask={deleteTask}
				toggleComplete={toggleComplete}
			items={itemsToShow}
			totalPages={totalPages}
			currentPage = {currentPage}
			startIndex = {startIndex}
			endIndex = {endIndex}
			setCurrentPage = {setCurrentPage}
			/>
			
		</div>
	)
}

export default ToDo;