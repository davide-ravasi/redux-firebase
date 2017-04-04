import Firebase from 'firebase';
import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST,
  RETRIEVE_POST
} from './types';

const Posts = new Firebase('https://git-library-4d56b.firebaseio.com/');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}

export function createPost(post) {
  console.log(post);
  return dispatch => Posts.push(post);
}

export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}

export function retrievePost(key) {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: RETRIEVE_POST,
        payload: snapshot.child(key).val()
      });
    });
  };
}

export function modifyPost(post, key) {
  console.log(post);
  console.log(key);
  return dispatch => Posts.child(key).update({"command":post.command});
}

// to do
// 1-  category select list
// 2-  styles boxes with colors
// 3-  authentification
// 4-  add errors on validation
// 5-  copy command to clipboard
// 6-  add elements to notify the modification of the changement 
// 7- sort categories in alphabetical order

