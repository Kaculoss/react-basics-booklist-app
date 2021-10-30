import React from "react";

const BookImage = ({ image }) => {
  console.log(image);
  return <img src={image} alt="Pirates of the Carribean" />;
};

export default BookImage;
