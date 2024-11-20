import React, { useEffect, useRef, useState } from "react";
import "../../styles/landingPageHeader.css";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { MdPhone, MdFormatQuote } from "react-icons/md";
import { locomotiveScroll } from "../../config";
import { FaQuoteLeft } from "react-icons/fa";

function LandingPageHeader() {
  const navigate = useNavigate();

  // const backgroundImages = [
  //   "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/j27owsqkjy7d0tvyvehr.webp",
  //   "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590056/Arc_Landing_Page/Header/wy43n8nicxheh7afc3rk.webp",
  //   "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/vkxrlivhk2fwzwichavq.webp",
  //   "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716590055/Arc_Landing_Page/Header/xcjdtwd2qlqhobcs9s7f.webp",
  // ];

  const imageRef = useRef(null);

  const scrollToFooter = () => {
    const navbarHeight = 100;
    const footer = document.getElementById("footerWithMessage");

    if (footer) {
      const topOffset =
        footer.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  // Video
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoSources = [
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155353/Arc_Landing_Page/Header/Videos/Optimized/d32hzd0utkayevm8hnrd.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155353/Arc_Landing_Page/Header/Videos/Optimized/nxcxljxjzzfmquyigiwx.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155353/Arc_Landing_Page/Header/Videos/Optimized/t2mfdyhlbfl42o62izdo.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155353/Arc_Landing_Page/Header/Videos/Optimized/nlriepamp99qkqwtry40.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155353/Arc_Landing_Page/Header/Videos/Optimized/qfrccwvxoeajgyajllmm.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155354/Arc_Landing_Page/Header/Videos/Optimized/lecbhyfvs9hoelec6hep.mp4",
    "https://res.cloudinary.com/dkwgg59ur/video/upload/v1720155353/Arc_Landing_Page/Header/Videos/Optimized/f3nkzjv5taaojnkbxgbv.mp4",
  ];

  const videoRefs = useRef(
    Array(videoSources.length)
      .fill()
      .map(() => React.createRef())
  );

  const changeVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  const handleVideoEnded = () => {
    changeVideo();
  };

  useEffect(() => {
    videoRefs.current.forEach((ref, index) => {
      if (index === currentVideoIndex) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    });
  }, [currentVideoIndex]);

  const scrollDown = () => {
    const target = document.getElementById("landingPageProdAndSer");
    locomotiveScroll.scrollTo(target, {
      duration: 3,
    });
  };

  return (
    <header id="landingPageHeader" className="landingPageHeader">
      <div className="wrapper">
        <div className="overlay"></div>
        <div className="header-content start-fade-bottom-delay">
          <div className="text">
            <div className="header-text">
              <p>
                We <span className="highlight">BUILD</span> America
              </p>
            </div>
            <p className="sub-text">
              Elevating Your Home's Protection with Precision Construction
            </p>
            <div className="quick-action-group">
              <span onClick={() => navigate(`/Contact`)} className="solid">
                <MdPhone />
                Contact Us
              </span>
              <span onClick={() => navigate(`/RequestQuote`)}>
                <MdFormatQuote />
                Request a Quote
              </span>
            </div>
          </div>
        </div>
        {/* <div className="slideshow">
          {backgroundImages && (
            <InfiniteCarousel
              autoCycle={true}
              cycleInterval={6000}
              arrows={false}
              dots={false}
              slidesToShow={1}
              incrementalSides={true}
              slidesSpacing={0}
              animationDuration={1000}
            >
              {backgroundImages.map((image, index) => (
                <img
                  key={`Slide ${index}`}
                  src={image}
                  alt={`Slide ${index}`}
                  className="background-image"
                  ref={imageRef}
                />
              ))}
            </InfiniteCarousel>
          )}
        </div> */}
        <div className="slideshow">
          {videoSources &&
            videoSources.map((video, index) => (
              <video
                key={index}
                className={`background-image ${
                  currentVideoIndex === index ? "active" : ""
                }`}
                autoPlay={currentVideoIndex === index ? true : false}
                muted
                loop={false}
                poster="https://res.cloudinary.com/dkwgg59ur/image/upload/v1720153600/Arc_Landing_Page/tziynr5f6wwxfpag9wpa.webp"
                onEnded={handleVideoEnded}
                ref={videoRefs.current[index]}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
        </div>
        <div className="bottom-details">
          <span className="outside">
            <span className="inside"></span>
          </span>
        </div>
      </div>
    </header>
  );
}

export default LandingPageHeader;
