import React from "react";

function Features() {
  return (
    <div className="features flex-center bg-light" id="features">
      <section className="left col-lg-6 col-12 ">
        <h2>
          A digital web design studio creating modern & engaging online
          experiences
        </h2>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean. A small river named Duden flows by
          their place and supplies it with the necessary regelialia.
        </p>
        <ul className="p-0">
          <li>We put a lot of effort in design.</li>
          <li>The most important ingredient of successful website.</li>
          <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
          <li>Submit Your Orgnization.</li>
        </ul>
        <button>Learn More <i className="fa-solid fa-arrow-right"></i></button>
      </section>
      <section className="right col-lg-6 col-10 p-5">
        <img src="./Images/online-world.svg" alt="img" />
      </section>
    </div>
  );
}

export default Features;
