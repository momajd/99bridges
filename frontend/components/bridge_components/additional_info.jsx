var React = require('react');
var Panel = require('react-bootstrap').Panel;
var Table = require('react-bootstrap').Table;

var AdditionalInfo = React.createClass({

  render: function() {
    var bridge = this.props.bridge;
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
              <td>{bridge.date}</td>
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
      </Panel>
    );
  }

});

module.exports = AdditionalInfo;
