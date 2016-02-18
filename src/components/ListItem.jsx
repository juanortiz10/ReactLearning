<<<<<<< HEAD
var React= require('react');

var ListItem= React.createClass({
  render: function(){
      return (<li>
              <h4>{this.props.text}</h4>
           </li>
      );
   }
});

module.exports = ListItem;
=======
var React = require('react');
var ListItem= React.createClass({
  render: function(){
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
});

module.exports= ListItem;
>>>>>>> 514a5fa297f71fa350c6bc80765c06b350f77dc6
