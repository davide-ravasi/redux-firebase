import firebase from 'firebase';
import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST,
  RETRIEVE_POST
} from './types';

var config = {
    apiKey: "AIzaSyDKOH7iAe8hD9wselYUrkzhp7MOAHgQ3vA",
    authDomain: "git-library-4d56b.firebaseapp.com",
    databaseURL: "https://git-library-4d56b.firebaseio.com",
    projectId: "git-library-4d56b",
    storageBucket: "git-library-4d56b.appspot.com",
    messagingSenderId: "251723972885"

};

firebase.initializeApp(config);

const Posts = firebase.database().ref();

// const firebaseAuth = firebase.auth;

// export function login (email, pw) {
//  return firebaseAuth().signInWithEmailAndPassword(email, pw)
// }

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
  return dispatch => Posts.child(key).update({"command":post.command,"category":post.category,"description":post.description,"options":post.options});
}

// to do -------------------------------------------------------
// 1-  category select list
// 2-  styles boxes with colors
// 3-  authentication
// 4-  add errors on validation
// 5-  add elements to notify the modification of the changement 
// 6-  sort categories in alphabetical order
// -------------------------------------------------------------
// copy to clipboard
// https://github.com/nkbt/react-copy-to-clipboard
// http://codepen.io/nkbt/pen/eNPoQv

