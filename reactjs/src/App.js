import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
	

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm React App</h1>
				<Person />
				<Person name="MAX" age="25"/>
				<Person name="Tom" age="25">children props</Person>

			</div>
		);
	}
}

export default App;
