'use strict';

var $ = require('jquery');
var React = require('react');
var qs = require('../lib/qs');
var UserList = require('./user-list');
var UserDetails = require('./user-details');

/**
 * Welcome to the Ping Users app!
 *
 * @author Chris Peters
 * @notes:
 *      - possible polyfills: bind, map
 */
var App = React.createClass({
    getInitialState: function() {
        return {
            page: document.location.hash.substr(2),
            groups: [],
            users: []
        };
    },

    componentDidMount: function() {
        $.get(this.props.url, function(data) {
            this.setState({
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

    render: function() {
        var View;

        if (this.state.page.indexOf('details') === 0) {
            View = <UserDetails id={qs('id')}/>
        } else {
            View = <UserList users={this.state.users} removeUser={this.removeUser} />;
        }

        return View;
    },

    removeUser: function(id) {
        var users = this.state.users,
            user;

        for(var i = 0, len = users.length; i < len; i++) {
            user = users[i];

            if (id === user.id) {
                users.splice(i, 1);
                break;
            }
        }

        this.setState({
            users: users
        });
    }
});

React.render(
    <App url="data/users.json" />,
    document.getElementById('container')
);
