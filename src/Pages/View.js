import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import instance from "../requests/base";
import "../styles/view.css";
import Row from "../components/Row";

const View = () => {
  const [data, setData] = useState();

  let { id, req, title} = useParams();

  req = decodeURIComponent(req);

  title = decodeURIComponent(title);


  const fetchData = async () => {
    let response = await instance.get(req);
    setData(response.data.results.find((movie) => movie.id == id));
  };

  let baseurl = `https://image.tmdb.org/t/p/original/`;

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      {data ? (
        <>
<div style={{padding:"0 10px"}}>
              <img src={`${baseurl}${data.backdrop_path}`} alt="" />
    
</div>          <div className="view-text">
            <h1>{data.title ? data .title : data.name}</h1>
            <h5>{data.overview}</h5>
            <h5>Rating : {data.vote_average}</h5>
            <h5>Release : {data.release_date}</h5>
          </div>
          <div className="category-container">
            <Row title={title} req={req} ></Row>
          </div>
         
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default View;
