import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../components/store/actions/postAction';

class PostDetails extends Component {
    state = { 
        apiBaseUrl : window.$apiBaseUrl,
        post: {}
    }


    ///////////////Methods/////////////
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/posts');
    }
    ///////////////Methods/////////////

    render() { 
        const thePost = this.props.post ? (
            <div className="container post">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="row text-center">
                    <button className="btn btn-danger" onClick={this.handleClick}>Delete</button>
                </div>
            </div>
        ) : (
            <div className="container">
                <p>Loading post ...</p>
            </div>
        )

        return ( 
            <div className="">
                {thePost}
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;

    ///console.log(state.posts.posts)
    return {
        //shorten version
        post: state.posts.posts.find(post => post.id === id)

        //or we can use the same as we used before
        // post: state.posts.find((post) => {
        //     return post.id === id
        // })
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost: (id) => dispatch(deletePost(id))
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);