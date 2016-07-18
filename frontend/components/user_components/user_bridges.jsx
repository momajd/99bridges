var React = require('react');
var Table = require('react-bootstrap').Table;
var Panel = require('react-bootstrap').Panel;

var UserBridges = React.createClass({

  render: function() {
    return (
        <Panel collapsible defaultExpanded header="Created Bridges">
          <Table responsive title="testing">
            <thead>
              <tr>
                <th>Bridge Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Additional Notes</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
        </Panel>
    );
  }
});

module.exports = UserBridges;
