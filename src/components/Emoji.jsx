import React from "react";

const Emoji = ({ label, symbol, ...rest }) => (
  <span
    {...rest}
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
export default React.memo(Emoji);
