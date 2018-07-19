import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import PostIndex from './post_index'
import PostNew from './posts_new'
import PostsShow from './post_show'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={PostIndex} />
          <Route path="/posts/new" component={PostNew} />
          <Route path="/posts/:id" component={PostsShow} />
        </Switch>
      </div>
    );
  }
}

export default App;
