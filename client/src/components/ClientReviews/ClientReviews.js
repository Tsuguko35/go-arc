import React from "react";
import Slider from "react-slick";

import "../../styles/clientReviews.css";

import * as mdIcons from "react-icons/md";

function CustomNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className={`next-arrow`} style={{ ...style }} onClick={onClick}>
      <mdIcons.MdNavigateNext />
    </div>
  );
}

function CustomPrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div className={`prev-arrow`} style={{ ...style }} onClick={onClick}>
      <mdIcons.MdNavigateNext />
    </div>
  );
}

function ClientReviews() {
  const settings = {
    className: "center",
    infinite: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="clientReviews" className="clientReviews feature">
      <div id="_Reviews" className="wrapper">
        <span className="title">What Our Clients Say About Us</span>
        <iframe
          src="https://widget.tagembed.com/155356?view"
          style={{ width: "100%", height: "500px", overflow: "auto" }}
          frameborder="0"
          allowtransparency="true"
        ></iframe>
        {/* <div className="reviews-container">
          <Slider {...settings}>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716418761/Arc_Landing_Page/Content/eft4hthijaetl4khixug.webp"
                      }
                      alt="User profile"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716418761/Arc_Landing_Page/Content/eft4hthijaetl4khixug.webp"
                      }
                      alt="User profile"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716418761/Arc_Landing_Page/Content/eft4hthijaetl4khixug.webp"
                      }
                      alt="User profile"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716418761/Arc_Landing_Page/Content/eft4hthijaetl4khixug.webp"
                      }
                      alt="User profile"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716418761/Arc_Landing_Page/Content/eft4hthijaetl4khixug.webp"
                      }
                      alt="User profile"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="user-details">
                  <div className="profile-picture">
                    <img
                      src={
                        "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716418761/Arc_Landing_Page/Content/eft4hthijaetl4khixug.webp"
                      }
                      alt="User profile"
                    />
                  </div>
                  <div className="details">
                    <p className="name">Bill Hicks</p>
                    <p className="sub">Vice President</p>
                  </div>
                </div>
                <p className="subject">It was a very good experience</p>
                <p className="review">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim arcu. Elementum felis magna pretium in
                  tincidunt. Suspendisse sed magna eget nibh in turpis.
                  Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
          </Slider>
        </div> */}
      </div>
    </div>
  );
}

export default ClientReviews;
