import "./DirectoryItem.styles.scss";
import React from "react";

const DirectroyItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
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