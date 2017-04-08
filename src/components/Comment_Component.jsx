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
        	<div className="">
			<div className="col-md-4 col-s-4 col-lg-4">
			<div className="note">
			
				<div className="p ">
				<h1>{this.props.children} </h1>
				<br />
				<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
				<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
				</div>
			</div>
			</div>
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