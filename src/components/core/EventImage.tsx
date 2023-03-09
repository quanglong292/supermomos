import React, { memo } from "react";

const EventImage = memo((props) => {
  return <img className="rounded-tr-[50px] rounded-bl-[50px]" {...props} />;
});

export default EventImage;
