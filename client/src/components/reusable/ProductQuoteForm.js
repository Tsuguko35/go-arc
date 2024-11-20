import React, { useRef, useState } from "react";

import "../../styles/productQuoteForm.css";
import emailjs from "emailjs-com";
import LoadingDot from "../../assets/svg/loader/LoadingDot";
import { useParams } from "react-router-dom";

function ProductQuoteForm() {
  const form = useRef();
  const { productType } = useParams();
  const [submit, setSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    home_address: "",
    city: "",
    state: "",
    postal_code: "",
    client_name: "",
    client_email: "",
    client_contact: "",
    client_address: "",
    client_property: "",
    client_message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(true);
    emailjs
      .sendForm(
        "service_lljfl3j",
        "template_dynlumi",
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
            home_address: "",
            city: "",
            state: "",
            postal_code: "",
            client_name: "",
            client_email: "",
            client_contact: "",
            client_address: "",
            client_property: "",
            client_message: "",
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
      id="productQuoteForm"
      className="productQuoteForm"
    >
      <input
        type="text"
        value={`${formData.first_name} ${formData.last_name}`}
        name="client_name"
        style={{ display: "none" }}
      />
      <input
        type="text"
        value={`${productType}`}
        name="client_service"
        style={{ display: "none" }}
      />
      <input
        type="text"
        value={`${formData.home_address}, ${formData.city}, ${formData.state}, ${formData.postal_code}`}
        name="client_address"
        style={{ display: "none" }}
      />
      <div className="title">Your Quotation</div>
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
            <p className="label">Home Address</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Home Address"
              name="home_address"
              value={formData.home_address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="city-and-state">
            <div className="input-with-label city">
              <p className="label">City</p>
              <input
                required
                type="text"
                className="user-input"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-with-label state">
              <p className="label">State</p>
              <input
                required
                type="text"
                className="user-input"
                placeholder="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-with-label zipcode">
            <p className="label">Postal Code</p>
            <input
              required
              type="text"
              className="user-input"
              placeholder="Zip Code"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-with-label">
            <p className="label">Type of Property</p>
            <select
              id="service"
              name="client_property"
              value={formData.client_property}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Type of Property
              </option>
              <option value="Commercial">Commercial</option>
              <option value="Residential">Residential</option>
            </select>
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
              required
            ></textarea>
          </div>
        </div>

        <div className="submit-area">
          <button type="submit" className="message-submit" disabled={submit}>
            {submit ? <LoadingDot width={40} height={40} /> : "Submit"}
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

export default ProductQuoteForm;
