import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });
        const result = await res.json();
        setPosts(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="posts">
      {isLoading && <h1>Loading...</h1>}
      {posts &&
        posts.map((post) => {
          return (
            <div post-item>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <NavLink to={`${post.id}`}>More</NavLink>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
