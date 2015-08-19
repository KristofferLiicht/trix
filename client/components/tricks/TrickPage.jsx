const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;


TrickPage = React.createClass({
  mixins: [ReactMeteorData, Navigation, State],

    getMeteorData() {
    
    const data = {};
    // Get list ID from ReactRouter
    const trickName = this.getParams().trickName;

    // Subscribe to the tasks we need to render this component
    const subHandle = Meteor.subscribe("StreetTricks");
    data.subsReady = subHandle.ready();
    if(data.subsReady){
        data.trick = Tricks.findOne({ trickName: trickName });
    }
    return data;
  },


  getInitialState() {
    return {
      viewState         : 'video'
    }
  },

  handleViewState(viewState) {
      this.setState({
      viewState: viewState
    });
  },



  renderTrickPageHeader(){
    return(
          <div className="row">
              <div className="ui ten wide column">
                <h1> {this.data.trick.trickName} </h1>
              </div>
              <div className="ui six wide column">
                <h2>Share now!</h2>
              </div>
          </div>
    );
  },


  render() {
    console.log('TrickPage#render');
    if(!this.data.subsReady){
      return (<div>Loading...</div>);
    }
    const subsReady = this.data.subsReady
    const trick = this.data.trick;
    const viewState = this.state.viewState;
    return (
      <div id="padTrick" className="ui grid">
            {this.renderTrickPageHeader()}
            <TrickBody 
              viewState={viewState} 
              handleViewState={this.handleViewState}
              trick={trick}
              subsReady={subsReady} />
      </div>          
    );
  }
});

      
/**
    if (! trick) {
      return <AppLoading />;
    }
 */

