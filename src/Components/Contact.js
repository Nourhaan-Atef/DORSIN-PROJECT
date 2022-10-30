import React from "react";

function Contact() {
  return (
    <div id="contact" className=" pt-5">
      <div className="flex-center flex-column">
        <header className="flex-center">
          <h1>GET IN TOUCH</h1>
        </header>
        <div className="divider m-3"></div>
        <div className="description flex-center">
          <p>
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with measurable results.
          </p>
        </div>
      </div>

      <div className=" row p-5 ">
        <section className="left col-lg-4 col-12 text-start p-3">
          <div className="address-1">
            <h4>Office Address 1:</h4>
            <p>4461 Cedar Street Moro, AR 72368</p>
          </div>
          <div className="address-2">
            <h4>Office Address 2:</h4>
            <p>2467 Swick Hill Street</p>
            <p>New Orleans, LA 70171</p>
          </div>
          <div className="address-3">
            <h4>Working Hours:</h4>
            <p>9:00AM To 6:00PM</p>
          </div>
        </section>
        <section className="right col-lg-8 col-12  p-3">
          <form action="submit">
            <input
              type="text"
              placeholder="Your name*"
              className="col-12"
              required
            />
            <input
              type="email"
              placeholder="Your email*"
              className="col-12"
              required
            />

            <input
              type="text"
              placeholder="Your Subject...."
              className="col-12"
            />
            <textarea
              placeholder="Your Message...."
              className="col-12"
              rows="5"
            ></textarea>
            <button>Send Message</button>
          </form>
        </section>
      </div>
      
    </div>
  );
}

export default Contact;
