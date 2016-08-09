var React = require('react');
var Jumbotron = require('react-bootstrap').Jumbotron;

var About = React.createClass({
  render: function() {
    return (
      <div className="about">
        <Jumbotron>
          <h1>About</h1>
          <br></br>
          <p>99Bridges is a tool that allows Bridge Engineers, Construction
            Professionals, and Bridge Enthusiasts to find and track information
            on bridges. Many engineering firms do not have an efficient system in
            place to easily access bridge locations and information; many use
            massive excel spreadsheets that are unmaintainable.
            The goal of this application is to make the system more efficient and
            modern.
          </p>
          <br></br>
          <p>Built using: Ruby on Rails, React, React-bootstrap, Google Maps API</p>
          <br></br>
          <p>Created By: <a href="http://momajd.com">Mohammad Majd </a> </p>
          <br></br>
        </Jumbotron>

        <a href="https://github.com/momajd/99bridges">
          <img className="git-logo"
            src="http://docs.whitesourcesoftware.com/download/attachments/17989744/github_logo.png?version=1&modificationDate=1463491374000">
          </img>
        </a>
      </div>
    );
  }
});

module.exports = About;
