import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import postReducer from './post_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  form: formReducer
});

export default rootReducer;
