import React, { useEffect, useState, useRef } from "react";
import "./Movie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { Slide1 } from "./Product";
import { useLocation } from "react-router-dom";

function Movie() {
  const [isPlaying, setIsPlaying] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };
  const [movieData, setMovieData] = useState({});
  let location = useLocation();

  useEffect(() => {
    const movie = location?.state?.movieItem;
    console.log(movie);
    setMovieData(movie);
  }, []);

  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div style={{ background: "rgb(31, 30, 30)", color: "white" }}>
      <div className="Mparent">
        <img className="commimage" src={movieData?.banner} />
        <div className="Mchild">
          <h3 style={{ fontSize: "80px" }}>{movieData?.title}</h3>
          <div className="Mchild2">
            <div style={{ marginRight: "40px", textAlign: "center" }}>
              <img src="../images/plus.png" />
              <p>WatchList</p>
            </div>
            <div style={{ marginRight: "40px", textAlign: "center" }}>
              <img src="../images/send.png" />
              <p>SHARE</p>
            </div>
            <div style={{ marginRight: "40px" }}>
              <button className="Mbtn" onClick={handlePlay}>
                {isPlaying && (
                  <ReactPlayer
                    url={movieData?.videourl}
                    playing={isPlaying}
                    ref={playerRef}
                    controls
                    // width="50%"
                    height="300px"
                  />
                )}
                <img src="../images/play.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: "90px", fontSize: "25px" }}>
        <p style={{ color: "#727171" }}>
          <b>IMBD</b> {parseFloat(movieData?.imdbrating)}
          &nbsp;&nbsp;&nbsp;&nbsp;2 h 30 min &nbsp;&nbsp;&nbsp;&nbsp;
          {movieData?.released}
        </p>
        <div>
          <button className="btnbor">Action</button>
          <button className="btnbor">Science Fiction</button>
          <button className="btnbor">Suspense</button>
          <button className="btnbor">Drama</button>
        </div>
        <div style={{ paddingTop: "50px" }}>
          <p style={{ width: "50%" }}>{movieData?.synopsis}</p>
        </div>
        <div style={{ paddingTop: "50px", paddingBottom: "20px" }}>
          <b>More Like This</b>
          <Slider {...settings}>
            {Slide1.map((item, id) => {
              return (
                <>
                  <img src={item.Url} alt="image1" />
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Movie;
