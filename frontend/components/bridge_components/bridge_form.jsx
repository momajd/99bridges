var React = require('react');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Button = require('react-bootstrap').Button;

var NewBridgeForm = React.createClass({

  getInitialState: function() {
    return {
      title: '', description: '', imageUrl: ''
    };
  },

  getValidationState: function() {
    var length = this.state.title.length;
    if (length >= 6) return 'success';
    else if (length > 0) return 'error';
  },

  buttonIsDisabled: function() {
    return this.getValidationState() !== 'success';
  },

  handleTitleChange: function(e) {
    this.setState({ title: e.target.value });
  },

  handleDescriptionChange: function(e) {
    this.setState({ description: e.target.value });
  },

  handleImageUrlChange: function(e) {
    this.setState({imageUrl: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var bridgeData = {
      title: this.state.title,
      description: this.state.description,
      lat: this.props.coords.lat(),
      lng: this.props.coords.lng(),
      img_url: this.state.imageUrl,
      user_id: SessionStore.currentUser().id
    };

    ClientActions.createBridge(bridgeData);
  },

  render: function () {

    return (
      <form onSubmit={this.handleSubmit}>
        <div id='street-view'></div>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>

          <ControlLabel>Bridge Title</ControlLabel>
          <FormControl
            placeholder="e.g. Market Street over Schuylkill River"
            onChange={this.handleTitleChange}/>
          <FormControl.Feedback />
        </FormGroup>

        <br/>
        <ControlLabel>Bridge Description</ControlLabel>
        <FormControl
          placeholder="e.g. three-span continuous, steel-girder"
          onChange={this.handleDescriptionChange}/>
        <br/>
        <ControlLabel>Latitude</ControlLabel>
        <FormControl value={this.props.coords.lat()} disabled='true'/>

        <br/>
        <ControlLabel>Longitude</ControlLabel>
        <FormControl value={this.props.coords.lng()} disabled='true'/>

        <br/>
        <ControlLabel>Image Url</ControlLabel>
        <FormControl onChange={this.handleImageUrlChange}/>

        <hr/>
        <Button type="submit" disabled={this.buttonIsDisabled()}>
          Submit Bridge
        </Button>

      </form>
    );
  }
});

module.exports = NewBridgeForm;
