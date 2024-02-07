// reducer.js

const initialState = {
  likedPosts: []
};

const likedPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKED_POST':
      return {
        ...state,
        likedPosts: [...state.likedPosts, action.payload]
      };
    case 'REMOVE_LIKED_POST':
      return state.filter(post => post.id !== action.payload.id);
    default:
      return state;
  }
};

export default likedPostsReducer;