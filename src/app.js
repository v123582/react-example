var React = require('react');

var Hello = require('./Hello.js');

var App = React.createClass({
  render() {
    return (
    	<div>
	      <div>React Example</div>  
				<Hello name="World"/>
				<Hello name="You"/>
			</div>
    );
  }
});

React.render(<App />, document.body);

// React.render(<div>React Example</div>, document.body);
