var React = require('react');
var cx    = require('classnames');

var TodoInput = require('./TodoInput.jsx');
var TodosList = require('./TodosList.jsx');

require('./TodosApp.less');

var TodosApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [],
            show: 'All'
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

        this.setState({
            todos: newTodos
        }, this._updateLocalStorage());
    },

    handleTodoDoneChange: function(todo) {
        var newTodos = this.state.todos.slice();
        var todoId = todo.id;

        newTodos.map((currentTodo) => {
            if (currentTodo.id === todoId) {
                currentTodo.done = !currentTodo.done;
            }
        });
        console.log(newTodos);
        this.setState({
            todos: newTodos
        }, this._updateLocalStorage());
    },

    handleShowClick: function(newShow) {
        this.setState({
            show: newShow
        });
    },

    _updateLocalStorage: function() {
        // TODO: FIX INCORRECT UPDATE
        var todos = JSON.stringify(this.state.todos);
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
                            <li className={allClasses} onClick={this.handleShowClick.bind(null, 'All')}>All</li>
                            <li className={newClasses} onClick={this.handleShowClick.bind(null, 'New')}>New</li>
                            <li className={doneClasses} onClick={this.handleShowClick.bind(null, 'Done')}>Done</li>
                        </ul>
                </div>
                <TodoInput
                    onTodoAdd={this.handleTodoAdd}
                />
                <TodosList data={this.state.todos} display={this.state.show} onTodoDoneChange={this.handleTodoDoneChange} />
            </div>
        );
    }
});

module.exports = TodosApp;
