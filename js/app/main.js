'use strict';

var $ = require('jquery');
var React = require('react');
var qs = require('../lib/qs');
var UserList = require('./user-list');
var UserDetails = require('./user-details');
var DOCUMENT_TITLE = 'Ping Users';

/**
 * Welcome to the Ping Users app!
 *
 * @author Chris Peters
 * @notes:
 *      - possible polyfills: bind, map
 */
var App = React.createClass({

    /**
     *
     */
    getInitialState: function() {
        return {
            dataReady: false,
            page: document.location.hash.substr(2),
            groups: [],
            users: []
        };
    },

    /**
     *
     */
    componentDidMount: function() {
        $.get(this.props.url, function(data) {
            this.setState({
                dataReady: true,
                groups: data.groups,
                users: data.users
            });
        }.bind(this)).
        fail(function() {
            // TODO: handle error
        });

        $(window).bind('hashchange', function() {
            this.setState({
                page: document.location.hash.substr(2)
            });
        }.bind(this));
    },

    /**
     *
     */
    render: function() {
        var View,
            user,
            id;

        if (this.state.dataReady) {
            if (this.state.page.indexOf('user') === 0) {
                document.title = 'User | ' + DOCUMENT_TITLE;
                id = parseInt(qs('id'));
                user = typeof id !== 'undefined' ? this.getUserById(id) : null;

                View = <UserDetails user={user} saveUser={this.saveUser} groups={this.state.groups} />
            } else if (this.state.page.indexOf('group') === 0) {
                document.title = 'Group | ' + DOCUMENT_TITLE;

            } else {
                document.title = DOCUMENT_TITLE;
                View = <UserList users={this.state.users} removeUser={this.removeUser} />;
            }
        }

        return View || <div className="loading"></div>;
    },

    /**
     * returns a user by its id property
     *
     * @param {number} id
     * @return {object} user
     */
    getUserById: function(id) {
        var users = this.state.users,
            user;

        for(var i = 0, len = users.length; i < len; i++) {
            user = users[i];

            if (id === user.id) {
                return user;
            }
        }
    },

    /**
     * returns a user's index by its id property. this is useful for removing
     * array items.
     *
     * @param {number} id
     * @return {number} index
     */
    getUserIndexById: function(id) {
        var users = this.state.users,
            user;

        for(var i = 0, len = users.length; i < len; i++) {
            user = users[i];

            if (id === user.id) {
                return i;
            }
        }
    },

    /**
     * adds a user to this.state.users prop
     *
     * @param {object} user
     */
    saveUser: function(user) {
        var users = this.state.users;

        // if user has an id we know it was an edit, if not: new!
        if (user.id) {
            for(var i = 0, len = users.length; i < len; i++) {
                if (user.id == users[i].id) {
                    users[i] = user;
                }
            }
        } else {
            user.id = users.length + 1;
            users.push(user);
        }

        this.setState({
            users: users
        });
    },

    /**
     * removes a user from this.state.users prop
     *
     * @param {number} id
     */
    removeUser: function(id) {
        var users = this.state.users,
            index = this.getUserIndexById(id);

        users.splice(index, 1);

        this.setState({
            users: users
        });
    }
});

React.render(
    <App url="data/users.json" />,
    document.getElementById('container')
);
