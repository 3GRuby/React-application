import "./DirectoryItem.styles.scss";
import React from "react";
import { useNavigate } from "react-router";

const DirectroyItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)
  return (
    <div className="directory-item-container" onClick={onNavigateHandler} >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};
export default DirectroyItem;
