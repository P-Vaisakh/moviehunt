import React from "react";
import Row from "../components/Row";
import requests from "../requests/allRequests";
import Banner from "../components/Banner";
import "../App.css";

const Home = () => {
  return (
    <div
      className="home-container"
    >
      <Banner req={requests.fetchTopRated}></Banner>
      <Row
        title={"Trending Now"}
        req={requests.fetchTrending}
      ></Row>
      <Row title={"Originals"} req={requests.fetchNetflixOriginals}></Row>
      <Row title={"Top Rated"} req={requests.fetchTopRated}></Row>
      <Row title={"Action Movies"} req={requests.fetchActionMovies}></Row>
      <Row title={"Comedy Movies"} req={requests.fetchComedyMovies}></Row>
      <Row title={"Horror Movies"} req={requests.fetchHorrorMovies}></Row>
      <Row title={"Romance Movies"} req={requests.fetchRomanceMovies}></Row>
      <Row title={"Documentaries"} req={requests.fetchDocumentaries}></Row>
    </div>
  );
};

export default Home;
