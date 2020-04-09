
const initState = {
    posts: [
      {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
    ]
  }

  const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
        //console.log('create post', action.post);
        return state;
        
        case 'CREATE_POST_ERROR':
        //console.log('Create post error', action.err);
        return state;

        case 'DELETE_POST':
        let newPosts = deleteThePost(state, action.id);
        console.log(newPosts);
        return {
            ...state,
            posts: newPosts
          }

        default:
        return state;
    }  
  }

  ///////////////Methods/////////////
  function deleteThePost(state, post_id){
    let newPost = '';
    newPost = state.posts.filter(post => {
      return post.id !== post_id
  })
  return newPost;
}
///////////////Methods/////////////

  export default postReducer;