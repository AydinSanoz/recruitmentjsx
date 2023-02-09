import { useState } from "react";
import "./App.css";

// Make two nested aligned squares &
// on click in increment red square, increment counter
// on click in decrement green, decrement counter
import React, { Component } from "react";

export default function app(params) {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		document.title = ` Your counter is ${counter} dir `;
	}, [counter]);

	function increement(e) {
		console.log("increement pressed");
		setCounter(counter + 1);
	}
	function decreement(e) {
		console.log("decreemet pressed");
		setCounter(counter - 1);
		e.stopPropagation();
	}
	return (
		<div className="container">
			<span>{counter}</span>
			<div className="box" id="increment" onClick={increement}>
				<div className="box" id="decrement" onClick={decreement}></div>
			</div>
		</div>
	);
}
