const {
  Link,
  Navigation,
  State,
  RouteHandler
} = ReactRouter;

AddTrickForm = React.createClass({
  mixins: [Navigation, State],

  getInitialState() {
    return {};
  },

  _handleSubmitClick() {
    let { trickName, trickDescription, trickVideoId, trickTutorialId, trickLevel } = this.refs;
    trickName               = trickName.getDOMNode().value;
    trickDescription        = trickDescription.getDOMNode().value;
    trickVideoId            = trickVideoId.getDOMNode().value;
    trickTutorialId         = trickTutorialId.getDOMNode().value;
    trickLevel              = trickLevel.getDOMNode().value;


    const trick = {
      trickName       : trickName,
      trickDescription: trickDescription,
      trickVideoId    : trickVideoId,
      trickTutorialId : trickTutorialId,
      trickLevel      : trickLevel
    };

    Tricks.insert(trick);

    this.transitionTo('tricks', { trickName: trickName });

  },

  renderForm() {
    return (
    <form className="ui form">
      <div className="fields">
        <div className="field">
          <label>Name</label>
          <input type="text" name="trickName" id="trickName" ref="trickName" placeholder="Trick Name"/>
        </div>
        <div className="field">
          <label>Vid ID</label>
          <input type="text" name="trickVideoId" id="trickVideoId" ref="trickVideoId" placeholder="Video ID"/>
        </div>
        <div className="field">
          <label>Tut ID</label>
          <input type="text" name="trickTutorialId" id="trickTutorialId" ref="trickTutorialId" placeholder="Tutorial ID"/>
        </div>
      </div>


      <div className="field">
        <label>Description</label>
        <textarea name="trickDescription" id="trickDescription" ref="trickDescription" placeholder="Description"></textarea>
      </div>


      <div className="field">
        <label>Level</label>
        <input type="range" min="0" max="5" name="trickLevel" id="trickLevel" ref="trickLevel"/>
      </div>

    </form>
    );
  },

  renderActions() {
    return (
      <div className="actions">
        <button className="ui button" type="submit" onClick={this._handleSubmitClick}>Submit</button>
      </div>
    );
  },

  render: function() {
    return (
      <div className='landing'>
        <div className="container">
          <div className="row">
            <div>
              {this.renderForm()}
              {this.renderActions()}
            </div>
          </div>
        </div>
      </div>
    )
  }

});
