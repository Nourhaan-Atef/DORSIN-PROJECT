import React from "react";

function Footer() {
  return (
    <div className="footer">
      <section className="contact col-12 bg-light p-5 m-0">
        <div className="row">
          <div className="social flex-center">
            <i className="fa-brands fa-facebook-f flex-center"></i>
            <i className="fa-brands fa-twitter flex-center"></i>
            <i className="fa-brands fa-linkedin-in flex-center"></i>
            <i className="fa-brands fa-google-plus-g flex-center"></i>
            <i className="fa-brands fa-dribbble flex-center"></i>{" "}
          </div>
        </div>
        <div className="support flex-center">
          <div className="phone flex-center">
            <i className="fa-solid fa-phone flex-center"></i>
            <p> +91 123 4556 789</p>
          </div>
          <div className="mail flex-center">
            <i className="fa-solid fa-envelope-open flex-center"></i>{" "}
            <p> Support@info.com</p>
          </div>
        </div>
      </section>

      <footer className=" bg-dark text-light p-5">
        <section className="col-lg-3  col-12 ">
          <h2>DORSIN</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </section>
        <section className="col-lg-3  col-12">
          <h2>Iformation</h2>
          <ul>
            <li>Terms & Condition</li>
            <li>About us</li>
            <li>Jobs</li>
            <li>Booksmarks</li>
          </ul>
        </section>
        <section className="col-lg-3 col-12">
          <h2>Support</h2>
          <ul>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Disscusion</li>
          </ul>
        </section>
        <section className="col-lg-3 col-12">
          <h2>Subscribe</h2>
          <p>
            In an ideal world this text wouldn't exist, a client would
            acknowledge the importance of having web copy before the design
            starts.
          </p>
        </section>
      </footer>

    </div>
  );
}

export default Footer;
