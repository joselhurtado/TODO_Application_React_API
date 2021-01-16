import React from "react";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<div className="container form">
				<h1>TODO LIST</h1>
				<br />

				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Add a new task to the list"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
					/>
					<span className="input-group-text" id="basic-addon2">
						Add Item
					</span>
				</div>
			</div>
		</div>
	);
}
