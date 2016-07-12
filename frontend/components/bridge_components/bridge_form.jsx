var React = require('react');
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Button = require('react-bootstrap').Button;

var NewBridgeForm = React.createClass({

  getInitialState: function() {
    return {
      title: '', description: '', lat: '', lng: ''
    };
  },

  getTitleValidationState: function() {
    var length = this.state.title.length;
    if (length > 6) return 'success';
    else if (length > 0) return 'error';
  },

  handleTitleChange: function(e) {
    this.setState({ title: e.target.value });
  },

  handleDescriptionChange: function(e) {
    this.setState({ description: e.target.value });
  },

  handleLatChange: function(e) {
    this.setState({lat: e.target.value});
  },

  handleLngChange: function(e) {
    this.setState({lng: e.target.value});
  },

  handleSubmit: function() {
    console.log('submitted');
  },

  render: function () {
    var lat = this.state.lat === '' ? this.props.coords.lat() : this.state.lat;
    var lng = this.state.lng === '' ? this.props.coords.lng() : this.state.lng;

    return (
      <form onSubmit={this.handleSubmit}>
        <div id='street-view'></div>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getTitleValidationState()}>

          <ControlLabel>Bridge Title</ControlLabel>
          <FormControl
            placeholder="e.g. Market Street over Schuylkill River"
            onChange={this.handleTitleChange}/>
          <FormControl.Feedback />

          <br/>
          <ControlLabel>Bridge Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            placeholder="e.g. three-span continuous, steel-girder"
            onChange={this.handleDescriptionChange}/>

          <br/>
          <ControlLabel>Latitude</ControlLabel>
          <FormControl value={lat} onChange={this.handleLatChange}/>

          <br/>
          <ControlLabel>Longitude</ControlLabel>
          <FormControl value={lng} onChange={this.handleLngChange}/>
          <hr/>

          <Button type="submit">Submit Bridge</Button>

        </FormGroup>
      </form>
    );
  }
});

module.exports = NewBridgeForm;
