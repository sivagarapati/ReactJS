import React from 'react';

const person = (props) => {
	return ( 
		<div>
		<p> I'm a Person! Name:  {props.name} & age: {props.age}</p> 
		<p>{props.children}</p>
		</div>
	)
};

export default person;