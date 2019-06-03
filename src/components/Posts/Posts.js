import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "../Post";
import './Posts.css';

const Posts = () => {
  return (
    <Query
      query={gql`
        {
          post(user_id: "a", post_id: "a") {
            image
            caption
            user {
              nickname
              avatar
            }
          }
        }
      `}
    >
    {({loading, error, data}) => {
        if (loading) return <p>Loading Posts...</p>;
        if (error) return <p>Error Fetching Posts...</p>;
        let posts = data.posts;

        return <div className="Posts">
          {posts.map(post => <Post nickname={post.user.nickname} avatar={post.user.avatar} image={post.image} caption={post.caption} key={post.id}/>)}
        </div>;
      }}
    </Query>
  )
}

export default Posts;

