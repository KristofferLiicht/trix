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

  _handleOnClickFace() {
    const shareUrl = "http://localhost:3000" + this.getPathname();
    
    FB.ui({
          method: 'feed',
          link: shareUrl, 
          picture: "http://www.ocdtypes.com/graphics/order_lighters.jpg",
          name: "Light Trick!",
          description: "Awesome trick man! Shine briiight like liiight"
        }, function(response){
            console.log(response);
        }
      );

    window.open("https://www.facebook.com/dialog/share?app_id=521513011337668&display=popup&href=" + shareUrl + "&redirect_uri=" + shareUrl);
  },


  renderTrickPageHeader(){
    const shareUrlFace = this.getPathname();
    const title = "Learn " + this.data.trick.trickName;
    const onClickFace = "window.open('https://www.facebook.com/dialog/share?app_id=521513011337668&display=popup&href=" + shareUrlFace + "&redirect_uri=" + shareUrlFace +"')"
   

    return(
          <div className="row">
              <div className="ui ten wide column">
                <h1> {this.data.trick.trickName} </h1>
              </div>
              <div className="ui six wide column">
                <div className="ui menu">
                  <a className="fa fa-facebook share-base share-facebook" onClick={this._handleOnClickFace}>
                    <div className="item">
                      Share on Facebook!
                    </div>
                  </a>
                  <div className="item">
                    <div className="ui button">Log-in</div>
                  </div>
                </div>                  
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

    <div className="fb-like" 
        data-href="http://www.your-domain.com/your-page.html" 
        data-layout="button" 
        data-action="like" 
        data-show-faces="true">
    </div>
    <div className="fb-share-button" 
         data-href="https://developers.facebook.com/docs/plugins/" 
         data-layout="button">_
    </div>   


     onclick="require("Popup").open("\/sharer.php?u=[URL]&display=popup&ref=plugin&src=share_button&app_id=150339008443796", 670, 340);"
 */

