import React from "react";

function Blog(props) {
  return (
    <div className="blog">
      <img src={props.imgURL} className="circle-img" alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p className="description">{props.theme}</p>
      <p className="description">{props.description}</p>
      <button className="btn">Read More</button>
    </div>
  );
}

export default Blog;