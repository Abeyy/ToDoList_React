import React, {Component} from "react"

var Comment = React.createClass({

	edit: function(){
		alert("Editing Comment");
	},

	remove: function(){
		alert("Removing Comment");
	},

	render: function(){
		return(
			<div>
				<h1>{this.props.children} </h1>
				<button onClick={this.edit}> Edit </button>
				<button onClick={this.remove}> Delete </button>
			</div>
			)
	}
});

export default Comment;