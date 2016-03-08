var React = require('react');

var Todo = require('./Todo.jsx');

require('./TodosList.less');

var TodosList = React.createClass({
    render: function() {
        const todos = this.props.data;

        return (
            <div className='TodosList__wrapper'>
                {
                    todos.map((todo, index) => {
                        return <Todo key={index} content={todo} />;
                    })
                }
            </div>
        );
    }
});

module.exports = TodosList;