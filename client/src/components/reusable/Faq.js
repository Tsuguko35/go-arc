import React, { useState } from "react";
import "../../styles/faq.css";

import * as FiIcons from "react-icons/fi";
import { faqQuestions } from "../../utils";

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState(0);

  const openFaq = (faqNumber) => {
    if (faqNumber === activeFaq) {
      setActiveFaq(0);
    } else {
      setActiveFaq(faqNumber);
    }
  };
  return (
    <div id="faq" className="faq feature">
      <div id="_FAQ" className="wrapper">
        <div className="faq-container">
          <div className="image">
            <img
              src={
                "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716767258/Arc_Faq/knj1ejuhuewxjkndhnr1.webp"
              }
              alt="Faq"
            />
          </div>
          <div className="faq-content">
            <div className="label">
              <img
                src={
                  "https://res.cloudinary.com/dkwgg59ur/image/upload/v1716424368/Arc_Faq/yx9jg1anfagqgiit94zs.webp"
                }
                alt="Faq"
              />
              <p>FAQ Question</p>
            </div>
            <p className="title">Frequently asked questions</p>
            <div className="faq-accordion">
              {faqQuestions.map((faq, index) => (
                <div
                  className={`faq ${activeFaq === index + 1 ? "active" : ""}`}
                  onClick={() => openFaq(index + 1)}
                >
                  <div className="text-container">
                    <div className="question">
                      <p>{faq.question}</p>
                      <p className="icon">
                        {activeFaq !== index + 1 && <FiIcons.FiPlus />}

                        {activeFaq === index + 1 && <FiIcons.FiMinus />}
                      </p>
                    </div>
                    <p className="answer">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
