var React = require('react');

var TodoInput = require('./TodoInput.jsx');
var TodosList = require('./TodosList.jsx');

require('./TodosApp.less');

var TodosApp = React.createClass({
    getInitialState: function() {
        return {
            todos: []
        };
    },

    componentDidMount: function() {
        var localTodos = JSON.parse(localStorage.getItem('todos'));

        if (localTodos) {
            this.setState( {
                todos: localTodos
            });
        }
    },

    handleTodoAdd: function(newTodo) {
        var newTodos = this.state.todos.slice();
        newTodos.unshift(newTodo);

        console.log(newTodos);

        this.setState({
            todos: newTodos
        }, this._updateLocalStorage());
    },

    _updateLocalStorage: function() {
        // TODO: FIX INCORRECT UPDATE
        var todos = JSON.stringify(this.state.todos);
        localStorage.setItem('todos', todos);
    },

    render: function() {
        return (
            <div className='TodosApp__wrapper'>
                <div className='TodosApp__header'>Your todo list</div>
                <div className='TodosApp__filter'>
                        Show
                        <ul>
                            <li className='active'>All</li>
                            <li>New</li>
                            <li>Done</li>
                        </ul>
                </div>
                <TodoInput
                    onTodoAdd={this.handleTodoAdd}
                />
                <TodosList data={this.state.todos} />
            </div>
        );
    }
});

module.exports = TodosApp;
