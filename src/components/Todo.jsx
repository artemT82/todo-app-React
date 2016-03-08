var React = require('react');
var cx    = require('classnames');

require('./Todo.less');

var Todo = React.createClass({
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

    render: function() {
        const classes = cx('Todo__wrapper', {
            'done': this.state.isChecked
        });

        return (
            <div className={classes}>
                <label>
                    <input type='checkbox' onChange={this.handleCheckboxChange} />
                    {this.props.content}
                </label>
            </div>
        );
    }
});

module.exports = Todo;