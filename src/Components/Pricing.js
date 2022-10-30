import React from "react";

const pricing = [
  {
    id:1,
    title: "ECONOMY",
    price: "$9.90",
    bandWidth: "1GB",
    onlineSpace: "50MB",
    support: "No",
    domain: "1",
    hiddenFess: "No",
  },
  {
    id:2,
    title: "DELUXE",
    price: "$19.90",
    bandWidth: "10GB",
    onlineSpace: "500MB",
    support: "No",
    domain: "10",
    hiddenFess: "No",
  },
  {
    id:3,
    title: "ULTIMATE",
    price: "$29.90",
    bandWidth: "100GB",
    onlineSpace: "2GB",
    support: "Yes",
    domain: "Unlimited",
    hiddenFess: "No",
  },
];

const list = pricing.map((card) => {
  return (
    <section key={card.id} className="card col-xl-3 col-lg-4 col-md-8 col-12 p-5 m-3">
      <div className="row">
        <p className="title">{card.title}</p>
        <h1 className="role py-3 m-0">{card.price}</h1>
        <p className="desc">BILLING PER MONTH</p>
        <div className="card-divider my-3"></div>
        <div className="card-body p-0 mb-3">
          <p>BandWidth: <span>{card.bandWidth}</span> </p>
          <p>onlineSpace: <span>{card.onlineSpace}</span></p>
          <p>Support: <span>{card.support}</span></p>
          <p>Domain: <span>{card.domain}</span></p>
          <p>Hidden Fess: <span>{card.bandWidth}</span></p>
        </div>
        <button>Join Now</button>
      </div>
    </section>
  );
});
function Pricing() {
  return (
    <div id="price" className="flex-center bg-light">
      <header className="flex-center">
        <h1>OUR PRICING</h1>
      </header>
      <div className="divider m-3"></div>
      <div className="description flex-center">
        <p>
          Call to action pricing table is really crucial to your for your
          business website. Make your bids stand-out with amazing options.
        </p>
      </div>
      <div className="pricing row row-cols-2 p-5 pb-0  flex-center">{list}</div>
    </div>
  );
}

export default Pricing;
