'use strict';

var React = require('react');

/**
 * The User details base component
 *
 * @component UserDetails
 * @author Chris Peters
 */
var UserDetails = React.createClass({
    render: function() {
        return (
            <div>{this.props.id}</div>
        );
    }
});

module.exports = UserDetails;