import _ from 'lodash';
import {
  RETRIEVE_POSTS
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_POSTS:
        console.log(action.payload);
      return action.payload;
  }

  return state;
}