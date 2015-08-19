TrickFaq = React.createClass({
  propTypes: {
    trick: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
    };
  },


  render() {


    return (
      <div className="row">
        <div className="ui fourteen wide column">
            <p>{this.props.trick.trickDescription}</p>
        </div>
        <div id="vidMenu" className="ui two wide column">
          <VidMenu/>
        </div>
      </div>

    );
  }
});
