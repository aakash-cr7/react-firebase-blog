import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, CreatePost, PostDetail, Navbar } from './';

class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/:id" component={PostDetail} />
          <Route exact path="/create-post" component={CreatePost} />
        </Switch>
      </div>
    );
  }
}

export default App;
