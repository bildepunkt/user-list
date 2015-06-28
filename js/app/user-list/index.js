'user strict';

var React = require('react');
var User = require('./user');
var UserSearch = require('./user-search');

/**
 * The User list base component
 *
 * @component UserList
 * @author Chris Peters
 */
var UserList = React.createClass({
    /**
     *
     */
    getInitialState: function() {
        return {
            search: ''
        };
    },

    /**
     *
     */
    render: function() {
        var users = typeof this.props.users !== 'undefined' ?
            this.props.users.map(function(user) {
                if (this.state.search === '' ||
                    user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1) {
                    return (
                        <User name={user.name} id={user.id} onUserDeleteClick={this.handleUserDeleteClick} />
                    );
                }
            }.bind(this)) : '';

        return (
            <div className="user-list">
                <h1>User List</h1>
                <UserSearch onSearchChange={this.handleSearchChange} />
                <ul className="users">
                    {users}
                </ul>
                <div className="user-count">Displaying <strong>{this.props.users.length}</strong> users</div>
                <br />
                <a href="#/user" className="add-user primary-button">Add User</a>
            </div>
        );
    },

    /**
     * send id to parent method who owns user list
     *
     * @param {number} id
     */
    handleUserDeleteClick: function(id) {
        this.props.removeUser(id);
    },

    /**
     * @param {string} value - the search input's current value
     */
    handleSearchChange: function(value) {
        this.setState({
            search: value
        });
    }
});

module.exports = UserList;
