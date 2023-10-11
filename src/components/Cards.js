import React from 'react'
import "../card.css";
import { Link } from 'react-router-dom';


const Cards = ({mov, req, title}) => {

    let baseurl = `https://image.tmdb.org/t/p/original/`;

  return (
    <>
      {
      mov ? (
        <Link to={`/view/${mov.id}/${encodeURIComponent(req)}/${encodeURIComponent(title)}`}>
            <div className="card">
              <div className="card-img">
                <img
                  src={`${baseurl}${mov.poster_path}`}
                  alt=""
                />
              </div>
              <div className="card-text">
                <h3 className="card- heading" style={{marginTop:"10px"}}>
                  {mov.title ? (mov.title.length>20 ? mov.title.slice(0,21) : mov.title )  : mov.name.length>20? mov.name.slice(0,21):mov.name}
                </h3>
                <p>
                  <i
                    className="fa-solid fa-thumbs-up"
                    style={{ color: "#fefefe", marginRight:"10px", marginTop:"10px", marginBottom:"10px"}}
                  ></i>
                  {mov.vote_average}
                </p>
                <p className="rel-date">{mov.release_date}</p>
              </div>
            </div>
        </Link >
      ) : (
        ""
      )}
    </>
  );
}

export default Cards