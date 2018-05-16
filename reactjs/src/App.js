import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';

class App extends Component {
	state = {
		persons: [
			{name: 'MAX',age:25},
			{name: 'Tom',age:26}
		]
	}

switchNameHandler= () =>{
	//console.log('was click');
	//DON't do THIS :  this.state.persons[0].name='React app';
	this.setState({
		persons:[
		{name: 'reactjs', age:5},
		{name: 'Tom' ,age:26}
	]
 })
}

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm React App</h1>
				<Person />
				<button onClick={this.switchNameHandler}>Switch name</button>
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>children props</Person>
			</div>
		);
	}
}

export default App;
