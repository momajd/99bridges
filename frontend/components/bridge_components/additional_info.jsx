var React = require('react');
var SessionStore = require('../../stores/session_store');
var AdditionalInfoEdit = require('./additional_info_edit');
var Panel = require('react-bootstrap').Panel;
var Table = require('react-bootstrap').Table;

var AdditionalInfo = React.createClass({

  handleUpdate: function(e) {
    e.preventDefault();
  },

  render: function() {
    var bridge = this.props.bridge;

    var updateButton;
    if (SessionStore.isUserLoggedIn()) {
      updateButton = <AdditionalInfoEdit bridge={bridge}/>;
    }

    return (
      <Panel collapsible header="Additional Info">
        <Table responsive>
          <tbody>
            <tr>
              <td>Number of Spans:</td>
              <td>{bridge.spans}</td>
            </tr>
            <tr>
              <td>Superstructure Type:</td>
              <td>{bridge.superstructure_type}</td>
            </tr>
            <tr>
              <td>Substructure Type:</td>
              <td>{bridge.substructure_type}</td>
            </tr>
            <tr>
              <td>Date Built:</td>
              <td>{bridge.year_built}</td>
            </tr>
            <tr>
              <td>Total Bridge Length:</td>
              <td>{bridge.length}</td>
            </tr>
            <tr>
              <td>Bridge Width:</td>
              <td>{bridge.width}</td>
            </tr>
            <tr>
              <td>Condition:</td>
              <td>{bridge.condition}</td>
            </tr>
            <tr>
              <td>Additional Notes:</td>
              <td>{bridge.notes}</td>
            </tr>
          </tbody>
        </Table>
        
        {updateButton}
      </Panel>
    );
  }

});

module.exports = AdditionalInfo;
