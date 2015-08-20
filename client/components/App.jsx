const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

App = React.createClass({
	mixins: [ReactMeteorData, Navigation, State],
  
    getMeteorData() {

    // Subscribe to the tasks we need to render this component
    const trickSubHandle = Meteor.subscribe("StreetTricks");

    return {
      subsReady: trickSubHandle.ready(),
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
    
  	if(!this.data.subsReady){
  		return (<div>Loading...</div>);
  	}
  	console.log(this.data.subsReady)

  	const tricks = this.data.tricks;
  	console.log(tricks)

    return (
   	  <div id="container">	
      	<TopBar/>	
      	<div className="ui grid">
		    <div id="grid" className="row">
		      
		      <div id="padLeft" className="ui thirteen wide column">


		       { this.data.subsReady ?
            	<RouteHandler/> :
            	<AppLoading /> }
		            
		      </div>


		      <div className="ui three wide column">


		      </div>

    </div>

      	</div>
      </div>
    );
  }
});
