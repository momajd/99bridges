var React = require('react');
var ErrorStore = require('../stores/error_store');

var Errors = React.createClass({

  getInitialState: function() {
    return {errors: []};
  },

  componentDidMount: function() {
    this.listener = ErrorStore.addListener(this.updateErrors);
  },

  updateErrors: function() {
    this.setState({errors: ErrorStore.errors()});
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  render: function() {
    var errors = this.state.errors.map(function(error, i) {
      return <div key={i}>{error}</div>;
    });
    return (
      <div>
        {errors}
      </div>
    );
  }

});

module.exports = Errors;
