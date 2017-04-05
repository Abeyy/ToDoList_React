import React, {Component} from 'react';
import Comment from './components/Comment_Component.jsx'
import Checkbox from './components/Checkbox_Component.jsx'

var Board = React.createClass({

	getInitialState: function(){
		return{
			comments:[
				'I like Bacon',
				'Ice Cream is good',
				'Beans are okay'
			]

		}
	},

	addComment: function(text){
		var arr = this.state.comments;
		arr.push(text);
		this.setState({comments: arr});
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

	render: function(){
		return (<div>
				<button onClick={this.addComment.bind(null,'Default Text')}>Add New</button>
				{this.state.comments.map(this.eachComment)}
					<Checkbox />
				</div>
			)
	}
});

export default Board;