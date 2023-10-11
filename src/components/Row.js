import React, { useEffect, useState } from "react";
import instance from "../requests/base"; //importing base url
import Cards from "./Cards";
import "../App.css";

const Row = ({ title, req }) => {
  const [trending, setTrending] = useState([]);

  // asynnc function for fetching data
  const fetchData = async () => {
    // fetching data using instance
    const response = await instance.get(req);
    setTrending(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="row">
      <h1>{title}</h1>
      <hr />
      <div className="container">
        {trending.length > 0 ? (
          trending.map((movie, index) => (
              <Cards mov={movie} key={index} req={req} title={title} ></Cards>
          ))
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              height: "100px",
              alignItems: "center",
            }}
          >
            <i
              className="fa-solid fa-spinner fa-spin-pulse"
              style={{ textAlign: "center" }}
            ></i>
           </div>
        )}
      </div>
    </div>
  );
};

export default Row;
