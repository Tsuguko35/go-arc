import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./config";

import "./styles/styles.css";
import { FacebookMsg, NavBar, PrivacyPolicy } from "./components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";
import { ProjectContext } from "./context";

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  //Sub Menu
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const hash = location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }, 300);
  }, [location]);

  // Animations
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.65;
      const features = document.querySelectorAll(".feature");
      const features2 = document.querySelectorAll(".feature2");
      const features3 = document.querySelectorAll(".feature3");
      const features4 = document.querySelectorAll(".feature4");
      const features5 = document.querySelectorAll(".feature5");

      features.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-bottom");
        }
      });
      features2.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-top");
        }
      });
      features3.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-left");
        }
      });
      features4.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-right");
        }
      });
      features5.forEach((feature) => {
        const featureBounding = feature.getBoundingClientRect();

        if (featureBounding.top <= triggerPoint) {
          feature.classList.add("start-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="main-container" data-scroll-container>
      {/* Privacy Policy */}
      <PrivacyPolicy show={showPrivacyPolicy} setShow={setShowPrivacyPolicy} />

      {/* Facebook Messenger */}
      <FacebookMsg />

      {/* Navigation Bar */}
      <NavBar />

      {/* Pages */}
      <div className="pages">
        <ProjectContext.Provider
          value={{
            setShowPrivacyPolicy,
            showPrivacyPolicy,
          }}
        >
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </ProjectContext.Provider>
      </div>
    </div>
  );
}

export default App;
