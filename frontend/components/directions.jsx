var React = require('react');

var DirectionsLink = React.createClass({

  render: function() {
    var bridge = this.props.bridge;
    var target;
    if (bridge.id) {
      target = (
        `https://www.google.com/maps/dir/Current+Location/${bridge.lat},
        ${bridge.lng}`
      );
    }

    return (
      <a href={target}
        target={target}>
        {this.props.linkText}
      </a>
    );
  }

});

module.exports = DirectionsLink;
