import React, {Component} from "react"

var Comment = React.createClass({

	getInitialState: function(){
		return{
			editing: false
		}
	},

	edit: function(){
		this.setState({editing: true});

	},

	remove: function(){
		console.log("Removing Comment");
		this.props.deleteFromBoard(this.props.index);
	},

	save: function(){
		var val = this.refs.newText.value;
		this.props.updateCommentText(val,this.props.index);
		this.setState({editing: false});
	},

	renderNormal: function(){
        return(
			<div>
				<h1>{this.props.children} </h1>
				<button onClick={this.edit}> Edit </button>
				<button onClick={this.remove}> Delete </button>
			</div>
        )
	},

	renderForm: function(){
        return(
			<div>
				<textarea ref="newText" defaultValue={this.props.children}></textarea>
				<button onClick={this.save}> Save </button>

			</div>
        )
	},

	render: function(){

			if(this.state.editing){
				return this.renderForm();
            }else{
				return this.renderNormal();
            }
	}
});

export default Comment;