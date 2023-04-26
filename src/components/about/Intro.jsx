import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/me2.jpeg",
    name: "Courtney Girley",
    designation: "Email Developer",
    text: (
      <>
        <p>
          Hi, my name is Courtney Girley
        </p>
        <p>
          A sailor looking to put my skills to use.  I am self-motivated, punctual, reliable, and have problem solving skills.  Details are paid close attention to when translating design mockups to HTML email documents.  I am passionate about gaining knowledge, experience and improving on my skills.  I have an extensive working knowledge of Javascript, Mailchimp, photoshop, and 
          sketch.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
