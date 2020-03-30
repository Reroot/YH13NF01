import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: true
		};

		this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	this.setState({
	//     checked : !this.state.checked
	// 	});
	// }
	handleClick() {
		this.setState((prevState) => ({
			checked: !prevState.checked
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.checked ? "ON" : "OFF"}
			</button>
		);
	}
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
