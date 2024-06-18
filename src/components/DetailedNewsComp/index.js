import React from "react";
import { useLocation } from 'react-router-dom';

const DetailedNewsComp = (props) => {
  const location = useLocation();
  const receivedData = location.state?.data || {};
  // const data = props.location.state;

  // Check if data is received
  console.log(receivedData);

  //const { author, content, description, title } = receivedData;

  return (
    <>
      <h1>This is detailed news route</h1>
      {/* <h1>{author}</h1>
      <h1>{title}</h1> */}
    </>
  );
};

export default DetailedNewsComp;
