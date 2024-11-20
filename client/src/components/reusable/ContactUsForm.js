import React, { useRef, useState } from "react";
import "../../styles/contactUsForm.css";
import emailjs from "emailjs-com";
import LoadingDot from "../../assets/svg/loader/LoadingDot";

function ContactUsForm() {
  const form = useRef();
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    client_name: "",
    client_email: "",
    client_contact: "",
    client_subject: "",
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
            first_name: "",
            last_name: "",
            client_name: "",
            client_email: "",
            client_contact: "",
            client_subject: "",
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
      id="contactUsForm"
      className="contactUsForm start-tilt-top"
    >
      <input
        type="text"
        value={`${formData.first_name} ${formData.last_name}`}
        name="client_name"
        style={{ display: "none" }}
      />
      <div className="inputs">
        <div className="input-group two">
          <div className="input-with-label">
            <p className="label">First Name</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="input-with-label">
            <p className="label">Last Name</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group two">
          <div className="input-with-label">
            <p className="label">Email Address</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Email Address"
              name="client_email"
              value={formData.client_email}
              onChange={handleChange}
            />
          </div>
          <div className="input-with-label">
            <p className="label">Phone Number</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Phone Number"
              name="client_contact"
              value={formData.client_contact}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-with-label">
            <p className="label">Subject</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="How can we help you?"
              name="client_subject"
              value={formData.client_subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-with-label">
            <p className="label">Message (Optional)</p>
            <textarea
              placeholder="Your Message"
              name="client_message"
              value={formData.client_message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="submit-area">
          <button type="submit" className="message-submit" disabled={submit}>
            {submit ? <LoadingDot width={40} height={40} /> : "Send Message"}
          </button>
          {submitStatus === "success" && (
            <p className="success">Message sent!</p>
          )}
          {submitStatus === "error" && (
            <p className="error">Error! Try again.</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default ContactUsForm;
