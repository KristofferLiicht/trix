Trick = React.createClass({
  propTypes: {
    viewState: React.PropTypes.string,
    trick: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      viewState: "video"
    };
  },

  viewStateChange(viewState) {
    this.setState({
      viewState: viewState
    });
  },

  render() {
    return (
      <div id="padTrick" className="ui grid">
          
              <div className="row">
                <div className="ui ten wide column">
                  <h1> {this.props.trick.trickName} </h1>
                </div>
                <div className="ui six wide column">
                  <h2>Share now!</h2>
                </div>
              </div>

              <div className="row">
                <div className="ui fourteen wide column">
                  <div>
                    <p>{this.props.trick.trickDescription}</p>
                  </div>
                </div>
                <div id="vidMenu" className="ui two wide column">
                  <VidMenu/>
                </div>
              </div>

        </div>
    );
  }
});
