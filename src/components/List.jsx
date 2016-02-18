var React= require('react');
<<<<<<< HEAD

var ListItem= require('./ListItem.jsx');

var List= React.createClass({
  render: function(){
      var createItem= function(text,index){
         return <ListItem key={index+text} text={text}/>;
      };
      return (<ul>{this.props.items.map(createItem)}</ul>);
  }
});

module.exports= List;
=======
var ListItem= require('./ListItem.jsx');

var ingredients= [{"id":1, "text": "jam"},{"id":2, "text":"cheese"},{"id":3, "text":"potatoes"}];

var List= React.createClass({
    render: function(){
      var listItems= ingredients.map(function(item){
          return <ListItem key={item.id} ingredient={item.text}/>;
      });

      return(<ul>{listItems}</ul>);
    }
});

module.exports=List;
>>>>>>> 514a5fa297f71fa350c6bc80765c06b350f77dc6
