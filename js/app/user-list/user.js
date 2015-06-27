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
        var classNames = 'user' + (this.props.stripe ? ' stripe' : '');

        return (
            <div className={classNames}>
                <a href={link}>{this.props.name}</a>
                <div className="close-button user-delete" onClick={this.handleClick}></div>
            </div>
        );
    },

    /**
     * @param {object} e - the dom event
     */
    handleClick: function(e) {
        this.props.onUserDeleteClick(this.props.id);
    }
});

module.exports = User;
