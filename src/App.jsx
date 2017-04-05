import React, {Component} from 'react';
import Comment from './components/Comment_Component.jsx'
import Checkbox from './components/Checkbox_Component.jsx'

var Board = React.createClass({
	render: function(){
		return (<div> 
					<Comment>This is item ONE.</Comment>
					<Comment>This is item TWO.</Comment>
					<Comment>This is item THREE.</Comment>
					<Checkbox />
				</div>
			)
	}
});

export default Board;