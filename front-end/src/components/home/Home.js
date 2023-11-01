import React, { useEffect, useState, useRef } from "react";
import Corousel from "../corousel/Corousel";
import "./Home.css";
import getBackendData from "../../utils/axios";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";

function Home() {
  const [bannerData, setBannerData] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const doSomething = async () => {
    // code here...
    getBackendData(`/banner`).then((res) => {
      console.log(res);
      setBannerData(res?.data[0]);
    });
  };

  useEffect(() => {
    doSomething();
  }, []);

  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <>
      <div style={{ background: "rgb(31, 30, 30)", color: "white" }}>
        <div className="parent">
          <img className="nav_img1" src={bannerData?.bannerImage} />
          <div className="child">
            <h1 style={{ fontSize: "96px" }}>{bannerData?.title}</h1>
            <p style={{ width: "35%" }}>{bannerData?.description}</p>
            {Array(5)
              .fill(1)
              .map((el, i) => {
                if (i < bannerData?.rating) {
                  return <span class="fa fa-star checked"></span>;
                } else {
                  return <span class="fa fa-star"></span>;
                }
              })}
            <br />
            <br />
            <div className="flex">
              <button className="btn111" onClick={handlePlay}>
                {isPlaying && (
                  <ReactPlayer
                    style={{ alignItems: "center" }}
                    url={bannerData?.videoUrl}
                    playing={isPlaying}
                    ref={playerRef}
                    controls
                    // width="50%"
                    height="300px"
                  />
                )}
                <img src="../images/play.png" /> Watch Now
              </button>
              <div className="flex1">
                <img src="../images/plus.png" />
                <p>WatchList</p>
              </div>
              <div>
                <img src="../images/send.png" />
                <p>SHARE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container1">
          <div>
            <Corousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
