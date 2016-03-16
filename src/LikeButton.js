var React = require('react');
 
var LikeButton = React.createClass({
  getInitialState() {
    alert('getInitialState');
    return { liked: false };
  },

  getDefaultProps (){
    alert('getInitialProps');
    return { id: 1 };
  },

  handleClick(e) {
    this.setState({ liked: !this.state.liked });
  },

  render() {
    return (
      <div>
        <p onClick={this.handleClick.bind(this)}>
          'this.state.like =>' {this.state.liked? 'true' : 'false'}
          <br />
          Click to toggle by this.
        </p>
        <p>
          'this.prop.id =>' {this.props.id}
          <br />
          Click to toggle by top-level.
        </p>
      </div>
    );
  },

  componentWillMount(){
    alert('componentWillMount');
  },

  componentDidMount(){
    alert('componentDidMount');
  },

  shouldComponentUpdate(){
    alert('shouldComponentUpdate');
    return true;
  },

  componentWillReceiveProps(){
    alert('componentWillReceiveProps');
    return true;
  },

  componentWillUpdate(){
    alert('componentWillUpdate');
  },

  componentDidUpdate(){
    alert('componentDidUpdate');
  },

  componentWillUnmount(){
    alert('componentWillUnmount');
  }

});

module.exports = LikeButton;


 
