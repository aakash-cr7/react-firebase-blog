import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div class="home">
        <h1>Uefa Nations Blog</h1>
        <div id="blog-by">by Aakash</div>

        <div class="post">
          <Link to="/post/someid">
            <h3>England defeats Iceland!</h3>
          </Link>

          <p>
            England finally came through after Sterling scored one goal at the
            very end!
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
