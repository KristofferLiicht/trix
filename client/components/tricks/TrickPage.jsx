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

    getInitialState: function() {
      return {};
  },

  getTrickByName(trickName) {
    return Tricks.findOne(trickName: trickName);
  },


  render() {
    const trick = getTrickByName(this.getParams())
    console.log(trick)

    return (
      <div id="padTrick" className="ui grid">
          <div className="row">
            <div className="ui ten wide column">
              <h1> {trick.trickName} </h1>
            </div>
            <div className="ui six wide column">
              <h2>Share now!</h2>
            </div>
          </div>

          <RouteHandler
            trick={trick} />

      </div>
    );
  }
});

      
/**
    if (! trick) {
      return <AppLoading />;
    }
 */

