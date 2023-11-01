import React from "react";
import "./Categories.css";
import img1 from "../../assest2/image1.jpg";
import img2 from "../../assest2/image2.jpg";
import img3 from "../../assest2/image3.jpg";
import img4 from "../../assest2/image4.jpg";
import img5 from "../../assest2/image5.jpg";
import img6 from "../../assest2/image6.jpg";
import img7 from "../../assest2/image7.jpg";
import img8 from "../../assest2/image8.jpg";
import img9 from "../../assest2/image9.jpg";
import img10 from "../../assest2/image10.jpg";
import img11 from "../../assest2/image11.jpg";
import img12 from "../../assest2/image12.jpg";

const Categories = () => {
  return (
    <div className="categories" style={{ background: "rgb(31, 30, 30)" }}>
      <div className="category">
        <img src={img1} />
        <p style={{ color: "white", textAlign: "center" }}>
          Action & Adventure
        </p>
      </div>

      <div className="category">
        <img src={img2} />
        <p style={{ color: "white", textAlign: "center" }}>Anime</p>
      </div>

      <div className="category">
        <img src={img3} />
        <p style={{ color: "white", textAlign: "center" }}>Comedy</p>
      </div>

      <div className="category">
        <img src={img4} />
        <p style={{ color: "white", textAlign: "center" }}>Documentary</p>
      </div>

      <div className="category">
        <img src={img5} />
        <p style={{ color: "white", textAlign: "center" }}>Drama</p>
      </div>

      <div className="category">
        <img src={img6} />
        <p style={{ color: "white", textAlign: "center" }}>Fantasy</p>
      </div>

      <div className="category">
        <img src={img7} />
        <p style={{ color: "white", textAlign: "center" }}>Horror</p>
      </div>

      <div className="category">
        <img src={img8} />
        <p style={{ color: "white", textAlign: "center" }}>Romance</p>
      </div>

      <div className="category">
        <img src={img9} />
        <p style={{ color: "white", textAlign: "center" }}>
          Mystery & Thrillers
        </p>
      </div>

      <div className="category">
        <img src={img10} />
        <p style={{ color: "white", textAlign: "center" }}>Sci -Fi</p>
      </div>

      <div className="category">
        <img src={img11} />
        <p style={{ color: "white", textAlign: "center" }}>Kids</p>
      </div>

      <div className="category">
        <img src={img12} />
        <p style={{ color: "white", textAlign: "center" }}>Sports</p>
      </div>
    </div>
  );
};

export default Categories;
