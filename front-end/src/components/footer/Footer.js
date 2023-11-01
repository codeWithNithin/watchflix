import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer style={{ background: "black", paddingTop: "50px" }}>
        <section>
          <div>
            <div className="row">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <img
                    className="img"
                    src="../images/WatchFlix.png"
                    alt="logo"
                  />
                </h6>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  style={{ color: "#DA3714", fontSize: "24px" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Connect Us
                </h6>
                <p>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -About
                  </Link>
                </p>
                <p>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Help Center
                  </Link>
                </p>
                <p>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Career
                  </Link>
                </p>
                <p>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Contact us
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6
                  style={{ color: "#DA3714", fontSize: "24px" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Manage
                </h6>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Account
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Manage Account
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Buy Gift Card
                  </a>
                </p>
                <p>
                  <a
                    href="#!"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    -Redeem Gift Card
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6
                  style={{ color: "#DA3714", fontSize: "24px" }}
                  className="text-uppercase fw-bold mb-4"
                >
                  Information
                </h6>
                <p style={{ textDecoration: "none", color: "white" }}>
                  -Privacy
                </p>
                <p style={{ textDecoration: "none", color: "white" }}>
                  -Terms & Conditions
                </p>
                <p style={{ textDecoration: "none", color: "white" }}>
                  -Cookies
                </p>
                <p style={{ textDecoration: "none", color: "white" }}>-FAQ</p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
