'use strict';

var React = require('react');

var UserList = React.createClass({
    render: function() {
        return (
            <div>
                <h1>User List</h1>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </div>
        );
    }
});

module.exports = UserList;
