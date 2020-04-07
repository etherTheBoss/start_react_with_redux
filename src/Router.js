import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Post from './components/posts/Posts';
import PostDetails from './components/posts/PostDetails'

const Router = ()=>{
    return(
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/posts" component={Post} /> 
            <Route path="/post/:post_id" component={PostDetails} /> 
        </Switch>
        
    )
}

export default Router;