const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

AppBody = React.createClass({
  mixins: [ReactMeteorData, Navigation, State],

  getInitialState: function() {
      return {};
  },

    getMeteorData() {
    const subHandles = [
      Meteor.subscribe("tricks")
    ];

    const subsReady = _.all(subHandles, function (handle) {
      return handle.ready();
    });

  render: function () {
    return (
    <div className="row">
      
      <div id="padLeft" className="ui thirteen wide column">
          { this.data.subsReady ?
            <RouteHandler /> :
            <AppLoading /> }

      </div>


      <div className="ui three wide column">


      </div>


    </div>

    );
  }
});
