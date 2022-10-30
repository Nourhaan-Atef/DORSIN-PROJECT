import React from "react";

const team = [
  {
    id:1,
    img: "./Images/frank.jpg",
    name: "Frank Johnson",
    role: "CEO",
  },
  {
    id:2,
    img: "./Images/elaine.jpg",
    name: "Elaine Stclair",
    role: "DESIGNER",
  },
  {
    id:3,
    img: "./Images/wanda.jpg",
    name: "Wanda Arthur",
    role: "DEVELOPER",
  },
  {
    id:4,
    img: "./Images/joshua.jpg",
    name: "Joshua Stemple",
    role: "MANAGER",
  },
];

const list = team.map((card) => {
  return (
    <section key={card.id} className="card col-lg-3 col-md-6 col-12 p-3">
      <div className="row">
        <div className="flex-center">
          <img src={card.img} alt="img" />
        </div>
        <h3 className="title pt-4">{card.name}</h3>
        <p className="desc">{card.role}</p>
      </div>
    </section>
  );
});
function Team() {
  return (
    <div id="team" className="flex-center" >
      <header className="flex-center">
        <h1>BEHIND THE PEOPLE</h1>
      </header>
      <div className="divider m-3"></div>
      <div className="description flex-center">
        <p>
          It is a long established fact that create category leading brand
          experiences a reader will be distracted by the readable content of a
          page when looking at its layout.
        </p>
      </div>
      <div className="teamMembers row row-cols-2 p-5 pb-0">{list}</div>
    </div>
  );
}

export default Team;
