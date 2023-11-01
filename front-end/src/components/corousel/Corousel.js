import React, { useState, useEffect } from "react";
import Trending from "../Pages/Trending";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Slide1 } from "../../Product";
// import { Slide2 } from "../../Product";
import "./Corousel.css";
import Scific from "../Pages/Sci-fic";
import Horror from "../Pages/Horror";
import getBackendData from "../../utils/axios";

function Corousel() {
  const [trendImage, setTrendImage] = useState();
  const [horrorImage, setHorrorImage] = useState();
  const [scificImage, setScificImage] = useState();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const doSomething = async () => {
    getBackendData(`/trending`).then((res) => {
      console.log(res);
      setTrendImage(res?.data);
    });

    getBackendData(`/horror`).then((res) => {
      console.log(res);
      setHorrorImage(res?.data);
    });

    getBackendData(`/scific`).then((res) => {
      console.log(res);
      setScificImage(res?.data);
    });
  };

  useEffect(() => {
    doSomething();
  }, []);

  return (
    <>
      <section>
        <h4 style={{ fontSize: "27px" }}>Trending Now</h4>
        <Slider {...settings}>
          {trendImage?.map((item, id) => {
            return (
              <>
                <Trending item={item} index={id} />
              </>
            );
          })}
        </Slider>
      </section>
      <section>
        <h4 style={{ fontSize: "27px" }}>Horror</h4>
        <Slider {...settings}>
          {scificImage?.map((item, id) => {
            return (
              <>
                <Scific item={item} index={id} />
              </>
            );
          })}
        </Slider>
      </section>
      <section>
        <h4 style={{ fontSize: "27px" }}>Sci-Fic</h4>
        <Slider {...settings}>
          {horrorImage?.map((item, id) => {
            return (
              <>
                <Horror item={item} index={id} />
              </>
            );
          })}
        </Slider>
      </section>
    </>
  );
}

export default Corousel;
