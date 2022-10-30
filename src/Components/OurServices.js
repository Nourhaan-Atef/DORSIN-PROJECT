import React from "react";

const cards = [
  {
    id: 1,
    icon: "fa-solid fa-gem",
    title: "Digital Design",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    id: 2,
    icon: "fa-solid fa-display",
    title: "Unlimited Colors",
    content:
      "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
  },
  {
    id: 3,
    icon: "fa-solid fa-piggy-bank",
    title: "Strategy Solutions",
    content:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.",
  },
  {
    id: 4,
    icon: "fa-solid fa-atom",
    title: "Awesome Support",
    content:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
  },
  {
    id: 5,
    icon: "fa-solid fa-newspaper",
    title: "Truly Multipurpose",
    content:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
  {
    id: 6,
    icon: "fa-solid fa-plane",
    title: "Easy to customize",
    content:
      "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
  },
];

const list = cards.map((card) => {
  return (
    <section key={card.id} className=" card  col-lg-4 col-md-6 col-12 p-4">
      <div className="row">
        <div className="flex-center">
          <i className={card.icon}></i>
        </div>
        <h3 className="title p-4">{card.title}</h3>
        <p className="desc">{card.content}</p>
      </div>
    </section>
  );
});
function OurServices() {
  return (
    <div id="Services" className=" flex-center">
      <header className="flex-center">
        <h1>OUR SERVICES</h1>
      </header>
      <div className="divider m-3"></div>
      <div className="description flex-center">
        <p>
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that have meaning and add a value for our
          clients.
        </p>
      </div>
      <div className="services row row-cols-2 p-5">{list}</div>
    </div>
  );
}

export default OurServices;
