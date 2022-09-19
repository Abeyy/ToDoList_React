import React, {Component} from 'react';
import Comment from './components/Comment_Component.jsx'
import Checkbox from './components/Checkbox_Component.jsx'

var Board = React.createClass({

	getInitialState: function(){
		return{
			comments:[
				'I like Bacon',
				'Ice Cream is good',
				'Beans are okay',
				'Why is Jenkins so bad'
			],

			adding: false

		}
	},

	add: function(){
		this.setState({adding: true});
	},

	addComment: function(){
		var arr = this.state.comments;
		arr.push(this.refs.newCommentText.value);
		this.setState({comments: arr});
		this.setState({adding: false});
	},

	removeComment: function(i){
		var arr = this.state.comments;
		arr.splice(i,1);
		this.setState({comments: arr});
	},

	updateComment: function(newText,i){
		var arr = this.state.comments;
		arr[i] = newText;
		this.setState({comments: arr});
	},

	eachComment: function(text, i){
		return(
			<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>{text}</Comment>
		);
	},

	renderNormal: function(){
		return(
			<div>
				<div className="row centerMe">
				<div className="centerMargin">
				{this.state.comments.map(this.eachComment)}
				</div>
				</div>
				<br />
				<div className="row">
					
				<div className="col-s-12 col-md-12 col-lg-12 centerMe">
				<button className="btn btn-info btn-addNew"onClick={this.add}>Add New</button>
				</div>
				</div>
				
			</div>
			);
	},

	renderAdding: function(){
		return(
			<div className="centerFullMargin">
				<div className="row">
				<div className="centerMe centerMargin">
				{this.state.comments.map(this.eachComment)}
				</div>
				</div>
				<br />

				<div className="row">
				<div className="col-s-12 col-md-12 col-lg-12 centerMe centerMargin">
				<textarea className="addNote" maxLength="65" ref="newCommentText"></textarea>
				<br />
				<button className="btn btn-addNew btn-success" onClick={this.addComment}>Save</button>
				</div>
				</div>
			</div>
			);
	},

	render: function(){
		if(this.state.adding){		
			return this.renderAdding();
		}else{
			return this.renderNormal();
		}
		
	}
});

export default Board;