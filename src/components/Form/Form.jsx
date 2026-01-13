
import './Form.css'
const Form = (props)=>{

	const{
		className,
		type,
		placeholder,
		hasButton = true,
		text,
		handleAdd,
		setText,
		
	} = props

	const onSubmit = (e) => {
		e.preventDefault();
		handleAdd();
	}
	return(


		<form onSubmit={onSubmit } className= {className}>
			<input
				value={text}
				onChange={(e) => setText(e.target.value)}
				type={type}
				placeholder={placeholder}
				className="todo-app__input"
			/>
			{hasButton && <button onClick={handleAdd} type="submit" className="todo-app__button button">Add</button>}
		</form>
	)
}

export default Form