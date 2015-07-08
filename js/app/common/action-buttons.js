'use strict';

var React = require('react');

var ActionButtons = React.createClass({
    render: function() {
        return (
            <div className="action-buttons">
                <a className="primary-button" onClick={this.props.onCancel} href="#/">Cancel</a>
                <a className="primary-button" onClick={this.props.onSave} href="#/">Save</a>
            </div>
        );
    }
});

module.exports = ActionButtons;