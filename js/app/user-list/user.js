'user strict';

var React = require('react');
var CloseButton = require('../common/close-button');

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
                <CloseButton classNames={'user-delete'} onClick={this.handleClick} />
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
