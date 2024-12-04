import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-wrap">
      <h2>{title}</h2>
      {blogs.map((blog, index) => (
        <div key={blog.id || index}>
          <Link to={`/BlogDet/${blog.id}`}>
            <div className={index % 2 === 0 ? "grey" : "white"}>
              <h3>{blog.title}</h3>
              {/* <p>{blog.body}</p> */}
              <p>written by {blog.author}</p>
              {/* <button onClick={() => {}}>delete blog</button> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
