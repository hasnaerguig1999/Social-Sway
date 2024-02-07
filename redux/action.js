export const ADD_LIKED_POST = 'ADD_LIKED_POST';
export const REMOVE_LIKED_POST = 'REMOVE_LIKED_POST';

export const addLikedPost = (post) => ({
  type: 'ADD_LIKED_POST',
  payload: post,
});

export const removeLikedPost = (post) => ({
  type: 'REMOVE_LIKED_POST',
  payload: post,
});