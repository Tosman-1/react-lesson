import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Newpage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };

    setIsPending(true);

    // console.log(blog);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("Blog added successfully!");
      setIsPending(false);
      navigate("/");
    });

    setTitle("");
    setBody("");
    setAuthor("");
  };

  return (
    <>
      <div className="bbdd"></div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="">Body</label>
        <textarea
          name=""
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label htmlFor="">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />{" "}
        <br />
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding ...</button>}
      </form>
    </>
  );
};

export default Newpage;
