TopBar = React.createClass({
    getInitialState() {
    return {
    };
  },

  render() {
    return(
		<nav className="ui menu navbar grid">
		  <div className="right menu">
		    <div className="item">
		      <div className="ui icon input">
		        <input type="text" placeholder="Search..."/>
		        <i className="search link icon"></i>
		      </div>
		    </div>
		  </div>
		</nav>
    );
  }
});

  