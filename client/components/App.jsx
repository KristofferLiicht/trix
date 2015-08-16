const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

App = React.createClass({
	mixins: [ReactMeteorData, Navigation, State],
  
    getMeteorData() {
    // Get list ID from ReactRouter
    const _trickName = this.getParams().trickName;


    // Subscribe to the tasks we need to render this component
    const trickSubHandle = Meteor.subscribe("StreetTricks");

    return {
      tricksLoading: ! trickSubHandle.ready(),
      tricks: this.getTricks(),
    };
  },


  getInitialState: function() {
      return {};
  },

  getTricks() {
  	return Tricks.find().fetch();
  },


  render: function () {
    
    const tricks = this.data.tricks
  	if(this.data.tricksLoading){
  		return (<div>Loading...</div>);
  	}

    return (
   	  <div id="container">	
      	<TopBar/>	
      	<div className="ui grid">
		    <div className="row">
		      
		      <div id="padLeft" className="ui thirteen wide column">
		            <RouteHandler
		            	tricks={tricks} />
		      </div>


		      <div className="ui three wide column">


		      </div>

    </div>

      	</div>
      </div>
    );
  }
});
