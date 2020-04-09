import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Post extends Component {
    state = { 
        apiBaseUrl : window.$apiBaseUrl,
        posts : [ ]
     }

     

    ///////////////Methods/////////////
    getPost(){
        axios.get(this.state.apiBaseUrl+'posts')
        .then((res)=>{
            this.setState({
                posts: res.data.slice(0,10)
            })
        })
    }
    ///////////////Methods/////////////

    render() { 
        const { posts } = this.props.posts
        const postList = posts.length ? (
        posts.map(post => {
            return (
                    <div className="card mb-2" style={{width: "40rem"}} key={post.id}>
                        <div className="card-body">
                            <Link to={'/post/'+post.id}>
                                <h5 className="card-title">{post.title}</h5>
                            </Link>
                            
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) 
        : (
        <div className="center">No posts to show</div>
        );

        return ( 
            <div>
                <div className="container">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <h1>Post</h1>
                        {postList}
                    </div> 
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state)=>{
    return{
        posts : state.posts
    }
}
 
export default connect(mapStateToProps)(Post);