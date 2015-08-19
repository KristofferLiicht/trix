const {
  Navigation,
  State
} = ReactRouter;

LandingPage = React.createClass({
  mixins: [Navigation, State],

  render() {

    return (
        <h1>This is the landing page</h1>
    );
  }
});
