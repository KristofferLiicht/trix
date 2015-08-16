const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;


TrickPage = React.createClass({
  mixins: [Navigation, State],
    propTypes: {
    tricks: React.PropTypes.arrayOf(React.PropTypes.object)
  },

    getMeteorData() {
    
    const data = {};
    // Get list ID from ReactRouter
    const trickName = this.getParams().trickName;
    console.log(trickName)

    // Subscribe to the tasks we need to render this component
    const subHandle = Meteor.subscribe("StreetTricks");
    data.tasksLoading = ! subHandle.ready();
    if(subHandle.ready()){
        data.trick = Tricks.findOne({ trickName: trickName })
    }
    console.log(data)
    return data;
  },


  getInitialState() {
    return {
      viewState         : 'video'
    }
  },



  renderTrickPageHeader(){
    return(
          <div className="row">
              <div className="ui ten wide column">
                <h1> {trick.trickName} </h1>
              </div>
              <div className="ui six wide column">
                <h2>Share now!</h2>
              </div>
          </div>
    );
  },

  renderTrickVid(viewState){
    //make an if statement to check on state for which videoID to render

    if(viewState="video"){
      const videoID = this.data.trick.trickVideoId;
    } else if(viewState="tutorial"){
      const videoID = this.data.trick.trickTutorialId;
    } else{
      return <div>Something went wrong</div>
    }


    const youtube = "http://www.youtube.com/embed/" + videoID + "?autoplay=1&origin=http://example.com"
   
   return(
            <iframe id="ytplayer" type="text/html" width="640" height="390"
              src={youtube}
              frameborder="0"/>
    );    
  },


  renderTrickFaq(){
    return(
            <p>{this.data.trick.trickDescription}</p> 
      );
  },

  renderVidMenu(){
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
  },

  render() {
    const trick = this.data.trick.trickName;
    console.log(trick)
    const viewState = this.state.viewState;

    if (viewState=="faq"){
      const renderTrick = renderTrickFaq();
    } else {
      const renderTrick = renderTrickVid(viewState);
    }

    return (
      <div id="padTrick" className="ui grid">
            {renderTrickPageHeader()}
          <div className="row">
            <div className="ui fourteen wide column">
              {renderTrick}
            </div>
            <div id="vidMenu" className="ui two wide column">
              {renderVidMenu()}
            </div>

          </div>
       </div>             
    );
  }
});

      
/**
    if (! trick) {
      return <AppLoading />;
    }
 */

