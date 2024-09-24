import './App.css';
import {useState} from 'react';
import Result from './Component/Result';

const secretnumber = Math.floor(Math.random() * 10) + 1;

function App() {

	const [term , setTerm] = useState("")

	const handleChange = (e) => {
		setTerm(e.target.value)
	}

  return (
	<div className="container">
		<div className="head">
			<label htmlfor="term" >Guess the number between 1 to 10 (answer: {secretnumber}) </label>
		</div>
		<input type="text" id="term" name="term" onChange={handleChange} />
		<Result secretnumber = {secretnumber} term = {term} />
	</div>
  );
}

export default App;
