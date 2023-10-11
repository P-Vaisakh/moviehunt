import React, { useEffect, useState } from "react";
import instance from "../requests/base";

const Banner = ({ req }) => {
  let baseurl = `https://image.tmdb.org/t/p/original/`;

  const [data, setData] = useState([]);

  const movieFetch = async () => {
    let response = await instance.get(req);
    let x = Math.ceil(Math.random() * response.data.results.length - 1);
    setData(response.data.results[x]);
  };

  useEffect(() => {
    movieFetch();
  }, []);

  console.log(data);
  return (
    <>
      {data ? (
        <div className="banner-container">
          <img src={`${baseurl}${data.backdrop_path}`} alt="" />
          <div className="text-container">
            <h1>{data.title ? data.title : data.name}</h1>
            <>
              {data.overview ? (
                data.overview > 200 ? (
                  data.overview.slice(0, 200) + "..."
                ) : (
                  data.overview
                )
              ) : (
                <h1>nothing to show here</h1>
              )}
            </>
          </div>
        </div>
      ) : (
        <h1>nothing to show here</h1>
      )}
    </>
  );
};

export default Banner;
