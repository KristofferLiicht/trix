VidMenu = React.createClass({
	  propTypes: {
    viewState: React.PropTypes.string,
    handleViewState: React.PropTypes.func
  },

    getInitialState() {
    return {
    };
  },

  render() {
    return(
		<div className="ui compact vertical labeled icon menu">
		  <a className="item">
		    <i className="video camera icon icon"></i>
		    Trick
		  </a>
		  <a className="item">
		    <i className="soccer icon"></i>
		    How-to
		  </a>
		  <a className="item">
		    <i className="book icon"></i>
		    FAQ
		  </a>
		</div>
    );
  }
});