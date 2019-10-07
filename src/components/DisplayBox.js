import React from "react";

import ImageBox from "./ImageBox";
import NotFound from "./NotFound";

const DisplayBox = (props) => {
  if (props.error) {
    return <NotFound />;
  } else if (props.img) {
    return <ImageBox {...props} />;
  } else return null;
};

export default DisplayBox;
