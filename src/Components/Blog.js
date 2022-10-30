import React from "react";

const details = [
  {
    id: 1,
    img: "./Images/UI-UX.jpg",
    role: "UI & UX Design",
    title: "Doing a cross country road trip",
    desc: "She packed her seven versalia, put her initial into the belt and made herself on the way..",
  },
  {
    id: 2,
    role: "Digital Marketing",
    img: "./Images/Digital-Marketing.jpg",
    title: "New exhibition at our Museum",
    desc: "Pityful a rethoric question ran over her cheek, then she continued her way.",
  },
  {
    id: 3,
    role: "Travelling",
    img: "./Images/Travelling.jpg",
    title: "Why are so many people..",
    desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

const list = details.map((card) => {
  return (
    <section key={card.id} className=" card col-lg-4 col-12 col-sm-12 p-4 mt-2">
      <div className="row">
        <img src={card.img} alt="Img" />
        <p className="role py-3 m-0">{card.role}</p>
        <h3 className="title">{card.title}</h3>
        <p className="desc">{card.desc}</p>
        <a href="#blog">Read Me <i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </section>
  );
});

function Blog() {
  return (
    <div id="blog" className=" flex-center">
      <header className="flex-center">
        <h1>BLOG</h1>
      </header>
      <div className="divider m-3"></div>
      <div className="description flex-center">
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean class at a euismod mus luctus quam.
        </p>
      </div>
      <div className="blog row row-cols-2 p-5">{list}</div>
    </div>
  );
}

export default Blog;
