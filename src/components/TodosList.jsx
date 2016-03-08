var React = require('react');

var Todo = require('./Todo.jsx');

require('./TodosList.less');

var TodosList = React.createClass({
    render: function() {
        const todos = this.props.data;
        const showOnly = this.props.display;
        const onTodoDoneChange = this.props.onTodoDoneChange;

        return (
            <div className='TodosList__wrapper'>
                {
                    todos.map((todo, index) => {
                        if (showOnly === 'New') {
                            return !todo.done
                            ?
                                <Todo
                                    key={index}
                                    content={todo.text}
                                    isDone={todo.done}
                                    onDoneChange={onTodoDoneChange.bind(null, todo)}
                                />
                            :
                                null
                        } else if (showOnly === 'Done') {
                            return todo.done
                            ?
                                 <Todo
                                    key={index}
                                    content={todo.text}
                                    isDone={todo.done}
                                    onDoneChange={onTodoDoneChange.bind(null, todo)}
                                />
                            :
                                null
                        } else {
                            return (
                                <Todo
                                    key={index}
                                    content={todo.text}
                                    isDone={todo.done}
                                    onDoneChange={onTodoDoneChange.bind(null, todo)}
                                />
                            );
                        }
                    })
                }
            </div>
        );
    }
});

module.exports = TodosList;