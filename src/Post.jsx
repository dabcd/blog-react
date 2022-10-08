import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import logo from "/location-image.webp";

export default function Post({ data }) {
  if (!data) return null;
  const params = useParams();
  const match = data.find((elem) => elem.id === params.postId);
  if (!match) return <NotFound />;
  return (
    <div className="Post">
      <div>
        <img className="image" src={match.imageUrl} />
      </div>
      <div className="info">
        <h2>{match.title}</h2>
        <h3>
          <img className="location-logo" src={logo} />
          {match.location}
        </h3>
        <div className="date">
          {match.startDate} - {match.endDate}
        </div>
        <div className="description">{match.description}</div>
      </div>
    </div>
  );
}
