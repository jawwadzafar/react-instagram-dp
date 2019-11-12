import React from "react";
import Emoji from "./Emoji";

const ImageBox = ({ username, fullName, img, followers, following, bio }) => {
  return (
    <section className="profileBox">
      <a
        href={`https://www.instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={img}
          alt={`profile pic of ${fullName}`}
          className="profileBox_img"
        />
      </a>
      <p>
        <a href={img} target="_blank" rel="noopener noreferrer">
          <Emoji symbol="👉" /> View In full size
        </a>
      </p>
      <h1 className="profileBox_fullName">{fullName}</h1>
      {bio && <p className="profileBox_bio">{bio}</p>}
      <ul>
        <li>
          <span className="bold">{followers}</span> followers
        </li>
        <li>
          <span className="bold">{following}</span> following
        </li>
      </ul>
    </section>
  );
};

export default ImageBox;
