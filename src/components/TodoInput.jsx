var React = require('react');

require('./TodoInput.less');

var TodoInput = React.createClass({
    getInitialState: function() {
        return {
            inputValue: ''
        };
    },

    handleInputChange: function(e) {
        const inputValue = e.target.value;

        this.setState({
            inputValue
        });
    },

    handleAddButtonClick: function() {
        // HTML5 REQUIRED
        if (this.state.inputValue === '') {
            alert('Fill text input');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: this.state.inputValue
        };

        this.props.onTodoAdd(newTodo);

        this.setState({
            inputValue: ''
        });
    },

    render: function() {
        return (
            <div className='TodoInput__wrapper'>
                <input
                    type='text'
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    placeholder='Add new todo'
                />
                <div className='TodoInput__add-button' onClick={this.handleAddButtonClick}>+</div>
            </div>
        );
    }
});

module.exports = TodoInput;