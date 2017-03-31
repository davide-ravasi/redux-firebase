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
      console.log('from dispatch');
      console.log(snapshot.child(key).val());
      dispatch({
        type: RETRIEVE_POST,
        payload: snapshot.child(key).val()
      });
    });
  };

}

// to do
// 1- modify action
// 2- hide/show command
// 3- category select list
// 4- styles boxes with colors
// 5- active/selected on menu
// 6- authentification