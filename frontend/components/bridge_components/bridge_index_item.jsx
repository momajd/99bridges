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

    return (
      <div
        className='bridge-index-item'
        id={this.props.bridge.id}
        onClick={this.handleClick}>

        <Image src={this.props.bridge.img_url} rounded responsive/>
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
