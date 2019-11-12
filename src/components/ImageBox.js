import React from "react";
import Emoji from "./Emoji";

const ImageBox = ({ fullName, img, followers, following, bio }) => {
  return (
    <div className="profileBox">
      <a href={img} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={`profile pic of ${fullName}`} className="profileBox_img" />
      </a>
      <p>
        <a href={img} target="_blank" rel="noopener noreferrer">
          <Emoji symbol="👉" /> View In full size
        </a>
      </p>
      <strong>{fullName}</strong>
      {bio && <p className="profileBox_bio">{bio}</p>}
      <ul>
        <li>
          <span className="bold">{followers}</span> followers
        </li>
        <li>
          <span className="bold">{following}</span> following
        </li>
      </ul>
    </div>
  );
};

export default ImageBox;
