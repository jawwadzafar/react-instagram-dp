import React from "react";

import ImageBox from "./ImageBox";
import NotFound from "./NotFound";

const DisplayBox = ({ error, img }) => {
  if (error) {
    return <NotFound />;
  } else if (img) {
    return <ImageBox img={img} />;
  } else return null;
};

export default DisplayBox;
