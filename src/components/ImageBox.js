import React from "react";
import Emoji from "./Emoji";

const ImageBox = ({ img, followers, following, bio }) => {
  return (
    <div className="profileBox">
      <img src={img} alt="username" className="profileBox_img" />
      <p>
        <a href={img} target="_blank" rel="noopener noreferrer">
          <Emoji symbol="🙄" /> View In full size
        </a>
      </p>
      <strong>Aamir khan</strong>
      {bio && <p className="profileBox_bio">{bio}</p>}
      <ul>
        <li><span className="bold">{followers}</span> followers</li>
        <li><span className="bold">{following}</span> following</li>
      </ul>
    </div>
  );
};

export default ImageBox;
