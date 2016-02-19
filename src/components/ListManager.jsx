var React= require('react');
var ReactDOM= require('react-dom');
var List= require('./List.jsx');

var ListManager= React.createClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },
    onChange: function(e){
      this.setState({newItemText: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();

        var currentItems= this.state.items;
        currentItems.push(this.state.newItemText);
        this.setState({items: currentItems, newItemText: ''});
    },
    render: function(){
        var divStyle ={
          marginTop: 10
        };
        return(
          <div className="col-sm-4" style={divStyle}>
              <div className="panel panel-primary">
                  <div className="panel-heading">
                      <h3>{this.props.title}</h3>
                  </div>
                  <div className="row panel-body">
                    <form onSubmit={this.handleSubmit}>
                    <div className="col-sm-9">
                      <input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
                    </div>
                    <div className="col-sm-2">
                      <button className="btn btn-primary">Add</button>
                    </div>
                    </form>
                    <List items={this.state.items}/>
                  </div>
              </div>
          </div>
        );
    }
});

module.exports= ListManager;
