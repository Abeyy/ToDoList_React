import React, {Component} from "react"

var Comment = React.createClass({

	getInitialState: function(){
		return{
			editing: false,
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
		var randNum = Math.floor(Math.random() * 6)
		if(this.props.index == 0 || this.props.index == 6){
        	return(
	        	<div className="">
				<div className="col-md-4 col-s-4 col-lg-4">
				<div className="yellow-note">
				
					<div className="p ">
					<h1>{this.props.children} </h1>
					<br />
					<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
					<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
					</div>
				</div>
				</div>
				</div>
        );
    	}
    	else if(this.props.index == 1 || this.props.index == 7){
    		return(
	        	<div className="">
				<div className="col-md-4 col-s-4 col-lg-4">
				<div className="blue-note">
				
					<div className="p ">
					<h1>{this.props.children} </h1>
					<br />
					<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
					<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
					</div>
				</div>
				</div>
				</div>
			);
    	}
    	else if(this.props.index == 2 || this.props.index == 8){
    		return(
	        	<div className="">
				<div className="col-md-4 col-s-4 col-lg-4">
				<div className="purple-note">
				
					<div className="p ">
					<h1>{this.props.children} </h1>
					<br />
					<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
					<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
					</div>
				</div>
				</div>
				</div>
			);
    	}
    	else if(this.props.index == 3 || this.props.index == 9){
    		return(
	        	<div className="">
				<div className="col-md-4 col-s-4 col-lg-4">
				<div className="pink-note">
				
					<div className="p ">
					<h1>{this.props.children} </h1>
					<br />
					<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
					<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
					</div>
				</div>
				</div>
				</div>
			);
    	}
    	else if(this.props.index == 4 || this.props.index == 10){
    		return(
	        	<div className="">
				<div className="col-md-4 col-s-4 col-lg-4">
				<div className="gray-note">
				
					<div className="p ">
					<h1>{this.props.children} </h1>
					<br />
					<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
					<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
					</div>
				</div>
				</div>
				</div>
			);
    	}
    	else if (this.props.index == 5 || this.props.index == 11){
    		return(
	        	<div className="">
				<div className="col-md-4 col-s-4 col-lg-4">
				<div className="green-note">
				
					<div className="p ">
					<h1>{this.props.children} </h1>
					<br />
					<button className="btn btn-primary marginizer-btn"onClick={this.edit}> Edit </button>
					<button className="btn btn-danger marginizer-btn" onClick={this.remove}> Delete </button>
					</div>
				</div>
				</div>
				</div>
			);
    	}
	},

	renderForm: function(){
        return(
			<div>
			<div className="row centerMargin">
				<div className="col-s-4 col-md-4 col-lg-4 centerMe">
				<textarea className="editNote" ref="newText" defaultValue={this.props.children}></textarea>
				
				<button className="btn btn-addNew btn-primary centerButton"onClick={this.save}> Save </button>
				</div>
			</div>
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