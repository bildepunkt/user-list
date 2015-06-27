'user strict';

var React = require('react');

var Search = React.createClass({
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

module.exports = Search;
