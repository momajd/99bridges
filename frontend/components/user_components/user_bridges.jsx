var React = require('react');
var Table = require('react-bootstrap').Table;
var Panel = require('react-bootstrap').Panel;

var UserBridges = React.createClass({

  render: function() {
    var rows;
    if (this.props.user.bridges) {
      rows = this.props.user.bridges.map(function(bridge) {
        var link = '#/bridges/' + bridge.id;
        return (
          <tr key={bridge.id}>
            <td>{bridge.id}</td>
            <td>{bridge.title}</td>
            <td>{bridge.description}</td>
            <td>TODO</td>
            <td><a href={link}>Link</a></td>
          </tr>
        );
      });
    }

    return (
        <Panel collapsible defaultExpanded header="Created Bridges">
          <Table responsive title="testing">
            <thead>
              <tr>
                <th>Bridge Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Additional Notes</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </Panel>
    );
  }
});

module.exports = UserBridges;
