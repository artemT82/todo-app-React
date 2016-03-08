var React = require('react');

require('./Todo.less');

var Todo = React.createClass({
    render: function() {
        return (
            <div className='Todo__wrapper'>
                <label>
                <input type='checkbox' />
                {this.props.content}
                </label>
            </div>
        );
    }
});

module.exports = Todo;