import React from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { GetWindowWidth } from "../utils";

function FacebookMsg() {
  const windowWidth = GetWindowWidth();
  return (
    <a
      title="Send a message"
      className={`messenger ${windowWidth < 768 ? "mobile" : ""}`}
      href="https://m.me/303695626163278"
      target="_blank"
    >
      {windowWidth < 768 ? "" : "Message Us!"}
      <FaFacebookMessenger />
    </a>
  );
}

export default FacebookMsg;
