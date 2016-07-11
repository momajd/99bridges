var React = require('react');
var Modal = require('react-bootstrap').Modal;

var BridgeForm = React.createClass({

  // getInitialState: function () {
  //   return { showModal: false };
  // },
  //
  close: function () {
    // this.setState({ showModal: false });
  },
  //
  // open: function () {
  //   this.setState({ showModal: true });
  // },

  render: function () {

    return (
      <div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

module.exports = BridgeForm;
