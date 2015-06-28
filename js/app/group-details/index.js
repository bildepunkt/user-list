'use strict';

var React = require('react');

/**
 * The Group details base component
 *
 * @component GroupDetails
 * @author Chris Peters
 */
var GroupDetails = React.createClass({
    render: function() {
        return (
            <div className="group-details">
                <h1>Group Details</h1>
                <input type="text" />
                <div className="action-buttons">
                    <a className="primary-button" href="#/">Cancel</a>
                    <a className="primary-button" href="#/">Save</a>
                </div>
            </div>
        );
    }
});

module.exports = GroupDetails;
