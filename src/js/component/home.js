import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [task, setTask] = useState([
		"Walk dog",
		"Wash clothes",
		"Clean house"
	]);
	const [userInput, setUserInput] = useState("");

	const handleKeyUp = () => {
		if (event.keyCode === 13) {
		} else {
		}
	};

	return (
		<div className="text-center mt-5">
			<div className="container form">
				<h1 className="todo-title">TODO LIST</h1>
				<div className="input-group mb-3">
					<input
						className="tasks form-control"
						type="text"
						onChange={event => setUserInput(event.target.value)}
						value={userInput}
						onKeyUp={handleKeyUp}
						placeholder="Add a new task"
						aria-label="Task on the list"
						aria-describedby="basic-addon2"
					/>
					<span className="input-group-text" id="basic-addon2">
						Add Item
					</span>
				</div>
				<br />

				<div className="list-group">
					{task.map((value, index) => {
						return (
							<li className="list-group-item" key={index}>
								{value}
							</li>
						);
					})}
				</div>
			</div>
		</div>
	);
}
