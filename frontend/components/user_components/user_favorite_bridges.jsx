var React = require('react');
var DirectionsLink = require('../directions');
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
            <td><a href={link}>{bridge.title}</a></td>
            <td>{bridge.description}</td>
            <td>{bridge.notes}</td>
            <td><DirectionsLink bridge={bridge} linkText="Link" /> </td>
          </tr>
        );
      });
    }

    return (
        <Panel collapsible defaultExpanded header="Saved Bridges">
          <Table responsive>
            <thead>
              <tr>
                <th width='80px'>Bridge Id</th>
                <th width='200px'>Title</th>
                <th width='320px'>Description</th>
                <th width='260px'>Additional Notes</th>
                <th width='90px'>Directions</th>
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
