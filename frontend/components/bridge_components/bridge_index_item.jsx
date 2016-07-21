var React = require('react');
var hashHistory = require('react-router').hashHistory;
var FavoriteButton = require('./favorite_button');
var Image = require('react-bootstrap').Image;

var BridgeIndexItem = React.createClass({

  handleClick: function (e) {
    if (e.target.id === "glyphicon") return;
    hashHistory.push(`/bridges/${this.props.bridge.id}`);
  },

  render: function() {
    var imageUrl = this.props.bridge.img_url || (
      "data:image/png;base64,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"
    )

    return (
      <div
        className='bridge-index-item'
        id={this.props.bridge.id}
        onClick={this.handleClick}>

        <Image src={imageUrl} rounded responsive/>
        <FavoriteButton bridge={this.props.bridge} />
        <div className='bridge-index-item-info'>
          <h3>{this.props.bridge.title}</h3>
          {this.props.bridge.description}
        </div>
      </div>
    );
  }
});

module.exports = BridgeIndexItem;
