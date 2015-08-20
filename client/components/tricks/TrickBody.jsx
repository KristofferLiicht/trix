const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;


TrickBody = React.createClass({
    propTypes: {
    viewState             : React.PropTypes.string,
    handleViewState       : React.PropTypes.func,
    trick                 : React.PropTypes.object,
    subsReady             : React.PropTypes.bool
  },
  mixins: [ReactMeteorData, Navigation, State],

 getMeteorData() {
    
    const data = {};
    // Get list ID from ReactRouter
    data.viewState = this.props.viewState;
    return data;
  },

  getInitialState(){
    return{
      menuItems: [ 
        {
          iconClassName: "video camera icon",
          title: "video",
          text: "Trick"
        },
        {
          iconClassName: "soccer icon",
          title: "tutorial",
          text: "How-to"
        },
        {
          iconClassName: "book icon",
          title: "faq",
          text: "FAQ"
        }
      ]
    }
  },


  handleViewState(title){
    this.props.handleViewState(title);
  },

  shouldComponentUpdate(nextProps){
    console.log(this.props);
    console.log(nextProps);
    return true;
  },

  renderTrickVid(viewState){
    //make an if statement to check on state for which videoID to render

    let videoID = this.props.trick.trickVideoId;
    if(viewState==="tutorial"){
       videoID = this.props.trick.trickTutorialId;
    }


    const youtube = "http://www.youtube.com/embed/" + videoID + "?autoplay=1&origin=http://example.com"
   
   return(
          <div id="contentArea">
            <iframe id="ytplayer" className="ytplayer" type="text/html"
              allowfullscreen
              src={youtube}
              frameBorder="0"/>
          </div>

    );    
  },


  renderTrickFaq(){
    return(
            <p>{this.props.trick.trickDescription}</p> 
      );
  },

  renderVidMenu(){
   const menuItems =
    _.map(this.state.menuItems, (menuItem) => {
      console.log("The state is,", this.props.viewState);
      console.log("The menu item is", menuItem.title);
      const viewStateColor = (this.props.viewState === menuItem.title);
      const item = "item vidMenu " + viewStateColor.toString();
      console.log("The item className is:", item);
      return(
        <div className={item} onClick={this.props.handleViewState.bind(null, menuItem.title)}>
          <i className={menuItem.iconClassName}></i>
          {menuItem.text}
        </div>
      )

    }, this);

    return(
        <div id="vidMenu" className="ui compact vertical labeled icon menu">
          {menuItems}
        </div>
      );
  },



  render() {
    console.log('TrickBody#render');
    if(!this.props.subsReady){
      return (<div>Loading...</div>);
    }
    const trick = this.props.trick.trickName;
    const viewState = this.props.viewState;

    let renderTrick = this.renderTrickVid(viewState);
    if (viewState==="faq"){
     renderTrick = this.renderTrickFaq();
    }
    console.log(viewState, renderTrick);
    return (

          <div className="row">
            <div className="ui fourteen wide column">
              {renderTrick}
            </div>
            <div id="vidMenu" className="ui two wide column">
              {this.renderVidMenu()}
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

