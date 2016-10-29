var React = require('react');
var ClientActions = require('../../actions/client_actions');
var SessionStore = require('../../stores/session_store');
var FormGroup = require('react-bootstrap').FormGroup;
var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
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
      corner1: this.props.coords[0],
      corner2: this.props.coords[1],
      corner3: this.props.coords[2],
      corner4: this.props.coords[3],
      img_url: this.state.imageUrl,
      user_id: SessionStore.currentUser().id
    };

    ClientActions.createBridge(bridgeData);
  },

  render: function () {

    var cornerLocations = this.props.coords.map( (coord, idx) => {
      return (
        <tr key={idx}>
          <td>{idx + 1}</td>
          <td>{coord.lat}</td>
          <td>{coord.lng}</td>
        </tr>
      );
    });

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>

          <ControlLabel>Bridge Title</ControlLabel>
          <FormControl
            placeholder="e.g. Market Street over Schuylkill River"
            onChange={this.handleTitleChange}/>
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Bridge Description</ControlLabel>
          <FormControl
            placeholder="e.g. three-span continuous, steel-girder"
            onChange={this.handleDescriptionChange}/>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Image Url</ControlLabel>
          <FormControl onChange={this.handleImageUrlChange}/>
        </FormGroup>

        <Table>
          <thead>
            <tr>
              <th>Corner #</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {cornerLocations}
          </tbody>
        </Table>

        <hr/>
        <Button type="submit" disabled={this.buttonIsDisabled()}>
          Submit Bridge
        </Button>

      </Form>
    );
  }
});

module.exports = NewBridgeForm;
