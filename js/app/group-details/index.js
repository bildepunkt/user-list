'use strict';

var React = require('react');
var ActionButtons = require('../common/action-buttons');

/**
 * The Group details base component
 *
 * @component GroupDetails
 * @author Chris Peters
 */
var GroupDetails = React.createClass({
    /**
     *
     */
    getInitialState: function() {
        return {
            group: ''
        };
    },

    /**
     *
     */
    render: function() {
        return (
            <div className="group-details">
                <h1>Group Details</h1>
                <input type="text" onChange={this.handleChange} />
                <ActionButtons onSave={this.handleSave} />
            </div>
        );
    },

    /**
     * @param {object} e
     */
    handleChange: function(e) {
        this.setState({
            group: e.target.value
        });
    },

    /**
     * sends group value to parent component
     */
    handleSave: function() {
        this.props.addGroup(this.state.group);
    }
});

module.exports = GroupDetails;
