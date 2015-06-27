'use strict';

var $ = require('jquery');
var React = require('react');
var UserList = require('./user-list');

var App = React.createClass({
    getInitialState: function() {
        return {
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
    },

    render: function() {
        return (
            <UserList users={this.state.users} />
        );
    }
});

React.render(
    <App url="data/users.json" />,
    document.getElementById('container')
);
