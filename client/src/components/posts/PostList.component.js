import React, { useContext, useState } from "react";

import { Redirect } from "react-router";
import PostCard from "./PostCard.component";
import { PostsContext } from "../../contexts/PostsContext";

import { CardContainer, StyledButton, ListContainer } from "./PostList.styles";

function PostList({ posts, setPosts, getUserComments, comments }) {
  //   const { data } = useContext(PostsContext);
  //   const [posts, setPosts] = useState([]);

  const toggleFlipped = id => {
    const toggleArr = posts.map(post => {
      if (post.id === id) {
        console.log(post.flipped);
        getUserComments(post.id);
        return {
          ...post,
          flipped: !post.flipped
        };
      } else {
        return post;
      }
    });
    setPosts(toggleArr);
  };

  return (
    <>
      <CardContainer>
        {posts.map(post => (
          <PostCard
            post={post}
            toggleFlipped={toggleFlipped}
            key={post.id}
            comments={comments}
          />
        ))}
      </CardContainer>
    </>
  );
}

export default PostList;
