var React = require('react');
var hashHistory = require('react-router').hashHistory;
var ItemFavoriteButton = require('./item_favorite');
var Image = require('react-bootstrap').Image;

var BridgeIndexItem = React.createClass({

  handleClick: function (e) {
    if (e.target.nodeName === "BUTTON") return;
    hashHistory.push(`/bridges/${this.props.bridge.id}`);
  },

  render: function() {

    return (
      <div
        className='bridge-index-item'
        id={this.props.bridge.id}
        onClick={this.handleClick}>

        <Image src={this.props.bridge.img_url} rounded responsive/>
        <div>
          <h3>{this.props.bridge.title}</h3>
          {this.props.bridge.description}
        </div>

        <ItemFavoriteButton bridge={this.props.bridge} />
      </div>
    );
  }
});

module.exports = BridgeIndexItem;
