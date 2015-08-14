const {
  Navigation,
  State
} = ReactRouter;

TrickPage = React.createClass({
  mixins: [ReactMeteorData, Navigation, State],

  getMeteorData() {
    // Get list ID from ReactRouter
    const trickName = this.getParams().trickName;

    // Subscribe to the tasks we need to render this component
    const tricksSubHandle = Meteor.subscribe("tricks", trickName);

    return {
      trick: Tricks.findOne({ trickName: trickName }).fetch(),
      tricksLoading: ! tricksSubHandle.ready()
    };
  },

  render() {
    const trick = this.data.trick;

    if (! list) {
      return <AppNotFound />;
    }

    return (
        <Trick trick={trick}/>
    );
  }
});
