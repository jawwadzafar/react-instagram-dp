import React from "react";
import Emoji from "./Emoji";

const ImageBox = ({ img, followers, following, bio }) => {
  return (
    <div>
      <p>
        <Emoji symbol="😎" /> We found it!
      </p>
      <a target={"_blank"} href={img}>
        <p>
          <b>Bio: </b>
          {bio}
        </p>
        <p>
          <b>Followers: </b>
          {followers} | <b>Following: </b>
          {following}
        </p>
        <div>
          <img alt={"instagram dp"} src={img} />
        </div>
        <Emoji symbol="🙄" /> View In full size
      </a>
    </div>
  );
};

export default ImageBox;
