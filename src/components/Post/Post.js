import React, { Component } from "react";
import './Post.css';

class Post extends Component {
  render() {
    const {nickname, avatar, image, caption } = this.props;

    return ( 
    <article className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={avatar} alt={nickname} />
            </div>
            <div className="Post-user-nickname">
              <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
          <img alt={caption} src={image} />
          </div>
        </div>
        <div className="Post-caption">
        {caption}
        </div>
      </article>
      );
    }
}

export default Post;