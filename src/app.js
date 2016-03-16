var React = require('react');
var LikeButton = require('./LikeButton.js');

var App = React.createClass({
  getInitialState() {
    return { id: 1 };
  },

  handleClick(e) {
    this.setState({ id: this.state.id+1 });
  },

  render() {
    return (
      <div>
        <div>React Example</div>  
        <LikeButton id={this.state.id}/>
        <p onClick={this.handleClick.bind(this)}>
            Click to toggle LikeButton prop id.
        </p>
      </div>
    );
  }
});

React.render(<App />, document.body);
