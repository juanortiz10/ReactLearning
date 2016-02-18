var React= require('react');
var ReactDOM= require('react-dom');
var List= require('./List.jsx');

var ListManager= React.createClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },
    handleSubmit: function(e){
        e.preventDefault();

        var currentItems= this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    },
    render: function(){
        return(
          <div>
              <h3>{this.props.title}</h3>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} value={this.state.newItemText}/>
                <button>Add</button>
              </form>
              <List items={this.state.items}/>
          </div>
        )
    }
});
