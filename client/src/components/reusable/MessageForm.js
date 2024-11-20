import React, { useContext, useRef, useState } from "react";
import "../../styles/messageForm.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import LoadingDot from "../../assets/svg/loader/LoadingDot";
import { ProjectContext } from "../../context";

function MessageForm() {
  const form = useRef();
  const { setShowPrivacyPolicy, showPrivacyPolicy } =
    useContext(ProjectContext);
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    client_name: "",
    client_email: "",
    client_contact: "",
    client_message: "",
    checked: false,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_lljfl3j",
        "template_hhbvqut",
        form.current,
        "j8WxurYcnIlLlZ_mS"
      )
      .then(
        () => {
          setSubmit(false);
          setSubmitStatus("success");
          setFormData({
            client_name: "",
            client_email: "",
            client_contact: "",
            client_message: "",
            checked: false,
          });
          console.log("SUCCESS!");
        },
        (error) => {
          setSubmit(false);
          setSubmitStatus("error");
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      id="messageForm"
      className="messageForm"
    >
      <div className="input-group">
        <input
          type="text"
          className="user-input"
          placeholder="Enter your name"
          required
          disabled={submit}
          name="client_name"
          value={formData.client_name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <input
          type="email"
          className="user-input"
          placeholder="Enter your email address"
          required
          disabled={submit}
          name="client_email"
          value={formData.client_email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="user-input"
          placeholder="Enter your telephone number"
          required
          disabled={submit}
          name="client_contact"
          value={formData.client_contact}
          onChange={handleChange}
        />
      </div>
      <textarea
        className="user-input textarea"
        placeholder="Your Message"
        required
        disabled={submit}
        name="client_message"
        value={formData.client_message}
        onChange={handleChange}
      ></textarea>

      <div className="checkbox-input">
        <input
          type="checkbox"
          className="checkbox"
          required
          onChange={() =>
            setFormData({ ...formData, checked: !formData.checked })
          }
          checked={formData.checked}
          disabled={submit}
        />
        <p className="text">
          I have read and accept the &nbsp;
          <span onClick={() => setShowPrivacyPolicy(true)}>
            privacy policy.
          </span>
        </p>
      </div>

      <div className="submit-area">
        <button type="submit" className="message-submit" disabled={submit}>
          {submit ? <LoadingDot width={40} height={40} /> : "Send Message"}
        </button>
        {submitStatus === "success" && <p className="success">Message sent!</p>}
        {submitStatus === "error" && <p className="error">Error! Try again.</p>}
      </div>
    </form>
  );
}

export default MessageForm;
