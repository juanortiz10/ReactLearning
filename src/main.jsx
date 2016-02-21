var React= require('react');
var ReactDOM= require('react-dom');
var ListManager= require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="FreshCoders"/>,document.getElementById('freshcoders'));
ReactDOM.render(<ListManager title="Todo"/>,document.getElementById('todo'));
ReactDOM.render(<ListManager title="Other" headingColor="#b31217"/>,document.getElementById('other'));
