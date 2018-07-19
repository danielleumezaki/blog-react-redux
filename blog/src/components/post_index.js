import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router-dom';
import _ from 'lodash'

class PostIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        return _.map(this.props.post, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            )
        })
    }

    render() {

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add Post
                    </Link>
                </div>
                <h3>Post</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { post: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex)