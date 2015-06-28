'use strict';

var React = require('react');

var ActionButtons = React.createClass({
    render: function() {
        return (
            <div className="action-buttons">
                <a className="primary-button" href="#/">Cancel</a>
                <a className="primary-button" href="#/">Save</a>
            </div>
        );
    }
});

module.exports = ActionButtons;