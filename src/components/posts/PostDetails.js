import React, {Component} from 'react';
import axios from 'axios';

class PostDetails extends Component {
    state = { 
        apiBaseUrl : window.$apiBaseUrl,
        post: {}
    }

    componentDidMount(){
        this.getPostDetails();
    }

    ///////////////Methods/////////////
    getPostDetails(){
        let id = this.props.match.params.post_id;
        axios.get(this.state.apiBaseUrl+'posts/'+ id)
        .then((res)=>{
            this.setState({
                post:res.data
            })
        })
    }
    ///////////////Methods/////////////

    render() { 

        const thePost = this.state.post ? (
            <div className="container post">
                <h4>{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
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
 
export default PostDetails;