import React, {Component} from 'react';

var Checkbox = React.createClass({
    getInitialState: function(){
        return{
            checked: false
        }
    },

    changeChecked: function(){
        this.setState({checked: !this.state.checked})
    },

    render: function(){
        var message;
        if(this.state.checked){
            message = "I am checked!";
        }else{
            message = "I am not checked. Check Me!";
        }
        return (
            <div>
                <h1> {message} </h1>
                <input type="checkbox" onChange={this.changeChecked} />
            </div>
        )
    }
});

export default Checkbox;