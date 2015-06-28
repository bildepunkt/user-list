'use strict';

var React = require('react');

/**
 * The User details base component
 *
 * @component UserDetails
 * @author Chris Peters
 */
var UserDetails = React.createClass({
    /**
     *
     */
    getInitialState: function() {
        return {
            dataReady: false
        };
    },

    /**
     *
     */
    componentDidMount: function() {
        this.props.user = this.props.user || {
            name: '',
            phone: '',
            group: ''
        };

        this.props.groups = this.props.groups || [];

        this.setState({
            dataReady: true
        });
    },

    /**
     *
     */
    render: function() {
        var user = this.props.user,
            options = typeof this.props.groups !== 'undefined' ? this.getOptions() : '';

        if (!this.state.dataReady) {
            return <div />;
        }

        return (
            <div className="user-details">
                <h1>User Details</h1>
                <label>Name <input type="text" value={user.name ? user.name : ''} /></label>
                <br />
                <label>Phone <input type="text" value={user.phone ? user.phone : ''} /></label>
                <br />
                <label>Group
                    <select value={this.props.user.group}>
                        {options}
                    </select>
                </label>
                <a href="#/group" className="primary-button add-group">Add Group</a>
                <br />
                <div className="action-buttons">
                    <a className="primary-button" href="#/">Cancel</a>
                    <a className="primary-button" href="#/">Save</a>
                </div>
            </div>
        );
    },

    /**
     * returns components in correspondance with user groups
     *
     * return {ReactComponent}
     */
    getOptions: function() {
        var groups = this.props.groups;
        var options = [];

        for(var i = 0, len = groups.length; i < len; i++) {
            options.push(<option value={groups[i]}>{groups[i]}</option>);
        }

        return options;
    },

    /**
     * send added user to parent (who owns user list)
     *
     * @param {object} user
     */
    handleUserAddClick: function(user) {
        this.props.addUser(user);
    }
});

module.exports = UserDetails;
