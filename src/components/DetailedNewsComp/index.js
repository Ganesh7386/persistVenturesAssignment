import React from "react";
import { useLocation} from 'react-router-dom';

const DetailedNewsComp = (props) => {
  console.log(props);
  const location = useLocation();
  console.log(location);
  const {author , title , description , content , url , urlToImage} = location.state;


  return (
    <>
      <h1>{author}</h1>
      <p>{title}</p>
      <p>{description}</p>
      <p>{content}</p>
    </>
  );
};

export default DetailedNewsComp;
