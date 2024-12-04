import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./customhook";

const BlogDet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
      alert("Blog deleted successfully");
    });
  };

  return (
    <div className="bld">
      {/* <h2>Blog Details - {id}</h2> */}
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blbd">{blog.body}</div>
          <button onClick={handleDelete}>delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDet;
