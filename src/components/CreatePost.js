import React from 'react';

class CreatePost extends React.Component {
  render() {
    return (
      <div class="create-post">
        <h1>Create Post</h1>

        <form>
          <div class="form-field">
            <label>Post Title</label>
            <input />
          </div>

          <div class="form-field">
            <label>Post Sub-title</label>
            <input />
          </div>

          <div class="form-field">
            <label>Content</label>
            <textarea></textarea>
          </div>

          <button class="create-post-btn">Create Post</button>
        </form>
      </div>
    );
  }
}

export default CreatePost;
