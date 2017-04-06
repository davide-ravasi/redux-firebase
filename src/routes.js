import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MenuTop from  './components/menu_top';
//import PostItem from './components/post_item';
import PostList from './components/post_list';
import PostsNew from './components/create_form';
import PostMod from './components/modify_form';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostList} />
        <Route path="create" component={PostsNew} />
        <Route path="modif/(:postId)" component={PostMod} />
    </Route>
)