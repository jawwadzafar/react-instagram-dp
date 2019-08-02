import React from "react";

const ImageBox = ({ img }) => {
  return (
    <div>
      <p>😎 We found it!</p>
      <a target={"_blank"} href={img}>
        <div>
          <img alt={"instagram dp"} src={img} />
        </div>
        🙄 View In full size
      </a>
    </div>
  );
}

export default ImageBox;