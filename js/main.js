'use strict';

var $ = require('jquery');
var React = require('react');
var UserList = require('./user-list');

var App = React.createClass({
    getInitialState: function() {
        return {
            route: window.location.hash.substr(1)
        };
    },

    componentDidMount: function() {
        var self = this,
            data;
        
        $.get('data/users.json', function(data) {
            console.log(data);
        })
        .fail(function(status) {
            console.log(status);
        });

        $(window).on('hashchange', function() {
            self.setState({
                route: window.location.hash.substr(1)
            });
        });
    },

    render: function() {
        var Child;

        switch (this.state.route) {
            default:
                document.title = 'User List | ' + document.title;
                Child = UserList;
            break;
        }

        return (
            <Child/>
        );
    }
});

React.render(<App/>, $('#container'));
