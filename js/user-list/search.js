'user strict';

var React = require('react');

var Search = React.createClass({
    render: function() {
        return (
            <input type="text" ref="search" onChange={this.handleChange}/>
        );
    },

    handleChange: function() {
        var value = React.findDOMNode(this.refs.search).value;
        this.props.onSearchChange(value);
    }
});

module.exports = Search;
