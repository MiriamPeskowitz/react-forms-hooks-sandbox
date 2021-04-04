//custom hooks -- convention is use in fron of the name, , so React knows the file is a hook 
import {useState} from 'react' //keep track of form values 

//useForm takes one paramater -- callback 
const useForm = (callback) => {

	const [values, setValues] = useState({})
	
	const handleSubmit = (event) => {
		if (event) event.preventDefault()
			callback()
	}

	const handleChange = (event) => {
		event.persist()
		//called when using React synthetic events inside async callback function 
		//synth event -- wrapper, sim to stopProgragation and preventDefault 
		//notused after v17, because no pooling 
		setValues(values => (
			{ ...values, 
				[event.target.name]: event.target.value

			}))
		console.log(values)
		}

		return {
			handleChange, 
			handleSubmit,
			values,
		}
	}

	export default useForm; 
