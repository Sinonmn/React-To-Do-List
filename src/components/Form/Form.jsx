
import './Form.css'
const Form = (props)=>{

	const{
		className,
		type,
		placeholder,
		onSubmit,
		hasButton = true,
	} = props

	return(
		<form className= {className}>
			<input
				type={type}
				placeholder={placeholder}
				className="todo-app__input"
			/>
			{hasButton && <button type="submit" className="todo-app__button button">Add</button>}
		</form>
	)
}

export default Form