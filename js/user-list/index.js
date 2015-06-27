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
    getInitialState: function() {
        return {
            search: ''
        };
    },

    render: function() {
        var users = typeof this.props.users !== 'undefined' ?
            this.props.users.map(function(user) {
                if (this.state.search === '' ||
                    user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1) {
                    return (
                        <User name={user.name} id={user.id} />
                    );
                }
            }.bind(this)) : '';

        return (
            <div className="user-list">
                <h1>User List</h1>
                <UserSearch onSearchChange={this.handleSearchChange} />
                <ul>
                    {users}
                </ul>
            </div>
        );
    },

    handleSearchChange: function(value) {
        this.setState({
            search: value
        });
    }
});

module.exports = UserList;
