App = React.createClass({
  getInitialState: function() {
      return {};
  },
  render: function () {
    return (
   	  <div id="container">	
      	<TopBar/>	
      	<div className="ui grid">
      			<AppBody/>
      	</div>
      </div>
    );
  }
});
