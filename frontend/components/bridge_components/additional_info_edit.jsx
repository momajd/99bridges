var React = require('react');
var ClientActions = require('../../actions/client_actions');
var BridgeStore = require('../../stores/bridge_store');
var Errors = require('../errors');
var Modal = require('react-bootstrap').Modal;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;

var AdditionalInfoEdit = React.createClass({

  getInitialState: function() {
    return {
      showModal: false,
      description: '',
      imageUrl: '',
      spans: '',
      superstructureType: '',
      substructureType: '',
      condition: '',
      yearBuilt: '',
      length: '',
      width: '',
      notes: ''
    };
  },

  openModal: function() {
    var bridge = this.props.bridge;
    this.setState({
      showModal: true,
      description: bridge.description,
      imageUrl: bridge.img_url,
      spans: bridge.spans || "",
      superstructureType: bridge.superstructure_type,
      substructureType: bridge.substructure_type,
      condition: bridge.condition,
      yearBuilt: bridge.year_built || "",
      length: bridge.length || "",
      width: bridge.width || "",
      notes: bridge.notes
    });
  },

  closeModal: function() {
    this.setState({showModal: false});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var bridge = {
      id: this.props.bridge.id,
      description: this.state.description,
      img_url: this.state.imageUrl,
      spans: this.state.spans,
      superstructure_type: this.state.superstructureType,
      substructure_type: this.state.substructureType,
      condition: this.state.condition,
      year_built: this.state.yearBuilt,
      length: this.state.length,
      width: this.state.width,
      notes: this.state.notes
    };
    ClientActions.updateBridge(bridge);
    this.closeModal();
  },

  handleDescriptionChange: function(e) {
    this.setState({description: e.target.value});
  },

  handleImageUrlChange: function(e) {
    this.setState({imageUrl: e.target.value});
  },

  handleSpanChange: function(e) {
    this.setState({spans: e.target.value});
  },

  handleSuperstructureTypeChange: function(e) {
    this.setState({superstructureType: e.target.value});
  },

  handleSubstructureTypeChange: function(e) {
    this.setState({substructureType: e.target.value});
  },

  handleConditionChange: function(e) {
    this.setState({condition: e.target.value});
  },

  handleYearBuiltChange: function(e) {
    this.setState({yearBuilt: e.target.value});
  },

  handleLengthChange: function(e) {
    this.setState({length: e.target.value});
  },

  handleWidthChange: function(e) {
    this.setState({width: e.target.value});
  },

  handleNotesChange: function(e) {
    this.setState({notes: e.target.value});
  },

  render: function() {
    return (
      <div>
        <Button onClick={this.openModal}>Update Bridge Info</Button>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update Bridge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>

              <ControlLabel>Description:</ControlLabel>
              <FormControl
                value={this.state.description}
                onChange={this.handleDescriptionChange}>
              </FormControl>
              <br/>

              <ControlLabel>Image Url:</ControlLabel>
              <FormControl
                value={this.state.imageUrl}
                onChange={this.handleImageUrlChange}>
              </FormControl>
              <br/>

              <ControlLabel>Number of Spans:</ControlLabel>
              <FormControl
                value={this.state.spans}
                onChange={this.handleSpanChange}>
              </FormControl>
              <br/>

                <ControlLabel>Superstructure Type:</ControlLabel>
                <FormControl
                  value={this.state.superstructureType}
                  onChange={this.handleSuperstructureTypeChange}>
                </FormControl>
                <br/>

                <ControlLabel>Substructure Type:</ControlLabel>
                <FormControl
                  value={this.state.substructureType}
                  onChange={this.handleSubstructureTypeChange}>
                </FormControl>
                <br/>

                <ControlLabel>Condition:</ControlLabel>
                <FormControl
                  value={this.state.condition}
                  onChange={this.handleConditionChange}>
                </FormControl>
                <br/>

                <ControlLabel>Year Built:</ControlLabel>
                <FormControl
                  value={this.state.yearBuilt}
                  onChange={this.handleYearBuiltChange}>
                </FormControl>
                <br/>

                <ControlLabel>Total Length (ft):</ControlLabel>
                <FormControl
                  value={this.state.length}
                  onChange={this.handleLengthChange}>
                </FormControl>
                <br/>

                <ControlLabel>Width (ft):</ControlLabel>
                <FormControl
                  value={this.state.width}
                  onChange={this.handleWidthChange}>
                </FormControl>
                <br/>

                <ControlLabel>Additional Notes:</ControlLabel>
                <FormControl
                  value={this.state.notes}
                  onChange={this.handleNotesChange}>
                </FormControl>
                <br/>

              <hr/>
              <Errors/>

              <Button type="submit">
                Update
              </Button>
              <Button onClick={this.closeModal}>
                Cancel
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

});

module.exports = AdditionalInfoEdit;
