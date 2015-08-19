Trick = React.createClass({
  propTypes: {
    trick: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
    };
  },


  render() {
    const youtube = "http://www.youtube.com/embed/" + this.props.trick.trickVideoId + "?autoplay=1&origin=http://example.com"
    console.log(youtube)
    console.log("from trick.jsx")


    return (
      <div className="row">
        <div className="ui fourteen wide column">
            <iframe id="ytplayer" type="text/html" width="640" height="390"
              src={youtube}
              frameborder="0"/>
            <p>{this.props.trick.trickDescription}</p>
        </div>
        <div id="vidMenu" className="ui two wide column">
          <VidMenu/>
        </div>
      </div>

    );
  }
});
