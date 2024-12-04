import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./customhook";

const Home = () => {
  //   let name = "Damilola";

  // useState hook
  const [name, setName] = useState("Damilola");

  const handleClick = (e) => {
    // console.log("clicked", e);
    // name = "Tosin";
    // console.log(name);

    setName("Tosin");
  };

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2>Welcome to the Homepage</h2>
      <h4>{name}</h4>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "mario")}
          title="Mario's Blogs"
        />
      )}
      <button onClick={handleClick}>Add a new Blog</button>
    </div>
  );
};

export default Home;
