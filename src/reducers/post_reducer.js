import _ from 'lodash';
import {
  RETRIEVE_POST
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case RETRIEVE_POST:
      return action.payload;
  }
  return state;
}