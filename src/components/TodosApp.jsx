const React = require('react');
const cx    = require('classnames');

const TodoInput = require('./TodoInput.jsx');
const TodosList = require('./TodosList.jsx');

require('./TodosApp.less');

const TodosApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [],
            show: 'All'
        };
    },

    componentDidMount: function() {
        const localTodos = JSON.parse(localStorage.getItem('todos'));

        if (localTodos) {
            this.setState( {
                todos: localTodos
            });
        }
    },

    componentDidUpdate: function() {
        this._updateLocalStorage();
    },

    handleTodoAdd: function(newTodo) {
        const newTodos = this.state.todos.slice();
        newTodos.unshift(newTodo);

        this.setState({
            todos: newTodos
        });
    },

    handleTodoDoneChange: function(todo) {
        const todoId = todo.id;
        const newTodos = this.state.todos.slice();

        newTodos.map((currentTodo) => {
            if (currentTodo.id === todoId) {
                currentTodo.done = !currentTodo.done;
            }
        });

        this.setState({
            todos: newTodos
        });
    },

    handleTodoDelete: function(todo) {
        const todoId = todo.id;

        const newTodos = this.state.todos.filter((currentTodo) => {
            return currentTodo.id !== todoId;
        });

        this.setState({
            todos: newTodos
        });
    },

    handleShowClick: function(newShow) {
        this.setState({
            show: newShow
        });
    },

    _updateLocalStorage: function() {
        const todos = JSON.stringify(this.state.todos);
        localStorage.setItem('todos', todos);
    },

    render: function() {
        const allClasses = cx({'active': this.state.show === 'All'});
        const newClasses = cx({'active': this.state.show === 'New'});
        const doneClasses = cx({'active': this.state.show === 'Done'});

        return (
            <div className='TodosApp__wrapper'>
                <div className='TodosApp__header'>Your todo list</div>
                <div className='TodosApp__filter'>
                        Show
                        <ul>
                            <li
                                className = {allClasses}
                                onClick   = {this.handleShowClick.bind(null, 'All')}
                            >
                                All
                            </li>
                            <li
                                className = {newClasses}
                                onClick   = {this.handleShowClick.bind(null, 'New')}
                            >
                                New
                            </li>
                            <li
                                className = {doneClasses}
                                onClick   = {this.handleShowClick.bind(null, 'Done')}
                            >
                                Done
                            </li>
                        </ul>
                </div>
                <TodoInput onTodoAdd={this.handleTodoAdd} />
                <TodosList
                    data             = {this.state.todos}
                    display          = {this.state.show}
                    onTodoDelete     = {this.handleTodoDelete}
                    onTodoDoneChange = {this.handleTodoDoneChange}
                />
            </div>
        );
    }
});

module.exports = TodosApp;
