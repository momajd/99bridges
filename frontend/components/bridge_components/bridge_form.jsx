var React = require('react');
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var HelpBlock = require('react-bootstrap').HelpBlock;

var NewBridgeForm = React.createClass({

  getInitialState: function() {
    return {
      title: '', description: ''
    };
  },

  getValidationState: function() {
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

  render: function () {

    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>

          <ControlLabel>Bridge Title</ControlLabel>
          <FormControl
            type="text"
            placeholder="e.g. Market Street over Schuylkill River"
            onChange={this.handleTitleChange}/>

          <FormControl.Feedback />

          <br/>
          <ControlLabel>Bridge Description</ControlLabel>
          <FormControl
            type="text"
            placeholder="e.g. three-span continuous, steel-girder"
            onChange={this.handleDescriptionChange}/>
        </FormGroup>
      </form>
    );
  }
});

module.exports = NewBridgeForm;
