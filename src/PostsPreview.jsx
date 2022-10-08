import React from "react";
import { Link } from "react-router-dom";

export default function PostsPreview({ data }) {
  if (!data) return null;
  const posts = data.map((elem) => (
    <Link to={elem.id} key={elem.id}>
      <div className="card">
        <div>
          <img className="image" src={elem.imageUrl} />
        </div>
        <div className="title">{elem.title}</div>
      </div>
    </Link>
  ));
  return <div className="PostsPreview">{posts}</div>;
}
