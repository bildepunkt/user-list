'user strict';

var React = require('react');

var User = React.createClass({
    render: function() {
        return (
            <div>{this.props.name}</div>
        );
    }
});

module.exports = User;
