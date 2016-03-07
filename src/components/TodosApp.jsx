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

    handleTodoAdd: function(newTodo) {
        var newTodos = this.state.todos.slice();

        newTodos.unshift(newTodo);

        this.setState({
            todos: newTodos
        });
        // update localStorage
    },

    // _updateLocalStorage: function() {

    // },

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
