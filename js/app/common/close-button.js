'user strict';

var React = require('react');

/**
 * A general use close button
 *
 * @component CloseButton
 * @author Chris Peters
 */
var CloseButton = React.createClass({
    /**
     *
     */
    render: function() {
        var classNames = 'close-button ' + this.props.classNames;

        return (
            <div className={classNames}></div>
        );
    },
});

module.exports = CloseButton;
