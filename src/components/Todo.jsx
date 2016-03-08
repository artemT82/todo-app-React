const React = require('react');
const cx    = require('classnames');

require('./Todo.less');

const Todo = React.createClass({
    getInitialState: function() {
        const isDone = this.props.isDone;

        return {
            isChecked: isDone || false
        };
    },

    handleCheckboxChange: function() {
        this.setState({
            isChecked: !this.state.isChecked
        });

        this.props.onDoneChange();
    },

    handleDeleteButtonClick: function() {
        this.props.onTodoDelete();
    },

    render: function() {
        const classes = cx('Todo__wrapper', {
            'done': this.state.isChecked
        });

        return (
            <div className={classes}>
                <label>
                    <input
                        type     = 'checkbox'
                        onChange = {this.handleCheckboxChange}
                        checked  = {this.state.isChecked}
                    />
                    {this.props.content}
                </label>
                <span className='Todo__delete-button' onClick={this.handleDeleteButtonClick}>x</span>
            </div>
        );
    }
});

module.exports = Todo;
