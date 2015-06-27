'user strict';

var React = require('react');

/**
 * A User list row. Displays user's name, displays & handles delete button
 *
 * @component UserDetails
 * @author Chris Peters
 */
var User = React.createClass({
    /**
     *
     */
    render: function() {
        var link = '#/details?id=' + this.props.id;
        return (
            <div class="user">
                <a href={link}>{this.props.name}</a>
                <span class="user-delete" onClick={this.handleClick}></span>
            </div>
        );
    },

    /**
     * @param {object} e - the dom event
     */
    handleClick: function(e) {
        this.props.onUserDeleteClick(e.target);
    }
});

module.exports = User;
