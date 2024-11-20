import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";
// import LocomotiveScroll from "locomotive-scroll";

// const ScrollToTop = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: document.querySelector("#main-container"),
//       smooth: true,
//       getDirection: true,
//       lerp: 0.1,
//       reloadOnContextChange: true,
//       multiplier: 1,
//       class: "ignore-scroll",
//       smartphone: {
//         smooth: true,
//       },
//       tablet: {
//         smooth: true,
//       },
//     });

//     const handleWheel = (e) => {
//       if (e.target.closest(".ignore-scroll")) {
//         e.stopPropagation();
//       }
//     };

//     document.addEventListener("wheel", handleWheel, { passive: true });

//     // Delay the scrollTo call to ensure it happens after LocomotiveScroll is fully initialized
//     setTimeout(() => {
//       scroll.scrollTo("top", { immediate: true });
//     }, 100);

//     return () => {
//       if (scroll) scroll.destroy();
//       document.removeEventListener("wheel", handleWheel);
//     };
//   }, [pathname]);

//   return null;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
