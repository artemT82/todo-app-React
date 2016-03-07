var React = require('react');

require('./Todo.less');

var Todo = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.content}
            </div>
        );
    }
});

module.exports = Todo;