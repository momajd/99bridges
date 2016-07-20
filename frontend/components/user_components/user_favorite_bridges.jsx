var React = require('react');
var Table = require('react-bootstrap').Table;
var Panel = require('react-bootstrap').Panel;

var UserFavoriteBridges = React.createClass({

  render: function() {
    var rows;
    if (this.props.user.favorite_bridges) {
      rows = this.props.user.favorite_bridges.map(function(bridge) {
        var link = '#/bridges/' + bridge.id;
        return (
          <tr key={bridge.id}>
            <td>{bridge.id}</td>
            <td>{bridge.title}</td>
            <td>{bridge.description}</td>
            <td>{bridge.notes}</td>
            <td><a href={link}>Link</a></td>
          </tr>
        );
      });
    }

    return (
        <Panel collapsible defaultExpanded header="Favorite Bridges">
          <Table responsive>
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

module.exports = UserFavoriteBridges;
