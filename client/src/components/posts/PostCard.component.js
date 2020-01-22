import React from "react";

import {
  Card,
  CardFront,
  CardTitle,
  CardBack,
  CardDescription,
  CardContainer,
  CardDetail
} from "./PostList.styles";

function PostCard({ post, toggleFlipped, comments }) {
  const handleClick = () => {
    console.log("HANDLE CLICK REAAACHEEDDDD");
    toggleFlipped(post.id);
    // getUserComments(post.id);
  };

  return (
    <div>
      {/* <GridRow>
        <GridColumn sm="3" lg="2"> */}
      <Card className={post.flipped ? "flipped" : ""} key={post.id}>
        <CardFront>
          <CardTitle onClick={handleClick}>{post.title}</CardTitle>
          <CardDetail onClick={handleClick}>{post.contents}</CardDetail>
        </CardFront>

        <CardBack className={post.flipped ? "flipped" : ""}>
          {comments.length > 0 ? (
            comments.map(comment => (
              <CardDescription onClick={handleClick} key={comment.id}>
                {comment.text}
              </CardDescription>
            ))
          ) : (
            <p onClick={handleClick}>Be the first to make a comment</p>
          )}
        </CardBack>
      </Card>
      {/* </GridColumn>
      </GridRow> */}
    </div>
  );
}

export default PostCard;
