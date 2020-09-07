import React from 'react';
import { firestore } from '../firebase';

class PostDetail extends React.Component {
  state = {
    post: {},
  };
  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    firestore
      .collection('posts')
      .doc(params.postId)
      .get()
      .then((snapshot) => {
        this.setState({
          post: snapshot.data(),
        });
      });
  }
  render() {
    const { post } = this.state;
    return (
      <div class="post-detail">
        <h1>{post.title}</h1>

        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetail;
