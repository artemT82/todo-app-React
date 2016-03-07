var ReactDOM = require('react-dom');
var React = require('react');
var TodosApp = require('./components/TodosApp.jsx');

ReactDOM.render(
    <TodosApp />,
    document.getElementById('mount-point')
);