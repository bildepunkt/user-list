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
        this.setState({
            dataReady: true,
            user: this.props.user || {
                name: '',
                phone: '',
                group: ''
            }
        });
    },

    /**
     *
     */
    render: function() {
        var user = this.state.user,
            options = typeof this.props.groups !== 'undefined' ? this.getOptions() : '';

        if (!this.state.dataReady) {
            return <div />;
        }

        return (
            <div className="user-details">
                <h1>User Details</h1>
                <label>Name <input type="text" ref="name" value={user.name} onChange={this.handleInputChange}/></label>
                <br />
                <label>Phone <input type="text" ref="phone" value={user.phone} onChange={this.handleInputChange}/></label>
                <br />
                <label>Group
                    <select value={user.group} ref="group" onChange={this.handleInputChange}>
                        {options}
                    </select>
                </label>
                <a href="#/group" className="primary-button add-group">Add Group</a>
                <br />
                <div className="action-buttons">
                    <a className="primary-button" href="#/">Cancel</a>
                    <a className="primary-button" href="#/" onClick={this.handleUserAddClick}>Save</a>
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

    handleInputChange: function() {
        this.setState({
            user: {
                name: React.findDOMNode(this.refs.name).value,
                phone: React.findDOMNode(this.refs.phone).value,
                group: React.findDOMNode(this.refs.group).value,
                id: this.state.user.id
            }
        });
    },

    /**
     * send added user to parent (who owns user list)
     */
    handleUserAddClick: function() {
        var dirtyUser = {
            name: React.findDOMNode(this.refs.name).value,
            phone: React.findDOMNode(this.refs.phone).value,
            group: React.findDOMNode(this.refs.group).value,
            id: this.state.user.id
        };

        this.props.saveUser(dirtyUser);
    }
});

module.exports = UserDetails;
