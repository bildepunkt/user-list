'user strict';

var React = require('react');

/**
 * The search component of the User list
 *
 * @component UserSearch
 * @author Chris Peters
 */
var UserSearch = React.createClass({
    render: function() {
        return (
            <input type="text" onChange={this.handleChange}/>
        );
    },

    handleChange: function(e) {
        var value = e.target.value;
        this.props.onSearchChange(value);
    }
});

module.exports = UserSearch;
