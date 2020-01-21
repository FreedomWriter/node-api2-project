// import React, { useEffect, useState } from "react";
// import "./App.css";
// import useHttp from "./hooks/useHttps";
// import { PostsContext } from "./contexts/PostsContext";
// import PostList from "./components/posts/PostList.component";

// function App() {
//   const { data, sendRequest } = useHttp();
//   const [postsArr, setPosts] = useState([]);

//   useEffect(() => {
//     const url = "";
//     sendRequest(url, "SEND");
//   }, [sendRequest]);

//   data && console.log(postsArr);

//   return (
//     <div className="App">
//       <PostsContext.Provider value={{ data }}>
//         <h1>Hello from App.js</h1>
//         <PostList />
//       </PostsContext.Provider>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import useHttp from "./hooks/useHttps";
import { PostsContext } from "./contexts/PostsContext";
import PostList from "./components/posts/PostList.component";

function App() {
  const { data, sendRequest } = useHttp();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/posts`)
      .then(res => {
        const withFlipped = res.data.posts.map(post => {
          return {
            ...post,
            flipped: false
          };
        });
        setPosts(withFlipped);
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect(() => {
  //   const getUserComments = id => {
  //     axios
  //       .get(`http://localhost:4000/api/posts/${id}/comments`)
  //       .then(response => setComments(response.data.comment))
  //       .catch(err => console.log(err));
  //   };

  //   getUserComments(id);
  // }, [id]);

  const getUserComments = id => {
    axios
      .get(`http://localhost:4000/api/posts/${id}/comments`)
      .then(response => setComments(response.data.comment))
      .catch(err => console.log(err));
  };
  console.log(comments);

  return (
    <div className="App">
      {/* <PostsContext.Provider value={{ data }}> */}
      <h1>Hello from App.js</h1>
      <PostList
        posts={posts}
        comments={comments}
        setPosts={setPosts}
        getUserComments={getUserComments}
      />
      {/* </PostsContext.Provider> */}
    </div>
  );
}

export default App;
