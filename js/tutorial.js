'use strict';

var $ = require('jquery');
var React = require('react');

var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h3 className="comment-author">
                    {this.props.author}
                </h3>
                <span dangerouslySetInnerHTML={{
                    __html: marked(this.props.text.toString())
                }} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} text={comment.text} />
            );
        });

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();

        if (!text) {
            return;
        }

        this.props.onCommentSubmit({
            author: author,
            text: text
        });

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';

        return;
    },

    render: function() {
        return (
            <div className="comment-form" onSubmit={this.handleSubmit}>
                <p>Leave your own comment!</p>
                <form>
                    <input type="text" ref="author" placeholder="Your name" />
                    <input type="text" ref="text"   placeholder="Leave a comment..." />
                    <input type="submit" value="Post" />
                </form>
            </div>
        );
    }
});

var CommentBox = React.createClass({
    getInitialState: function() {
        return { data: [] }
    },

    componentDidMount: function() {
        this.loadData();
        setInterval(this.loadData, this.props.pollInterval);
    },

    render: function() {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    },

    loadData: function() {
        $.get(this.props.url, function(data) {
            this.setState({ data: data });
        }.bind(this));
    },

    handleCommentSubmit: function(comment) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment
        }).
        done(function(data) {
            data.push(comment);
            this.setState({ data: data });
        }.bind(this));
    }
});

React.render(
    <CommentBox url="data/comments.json" pollInterval="2000" />,
    document.getElementById('container')
);
