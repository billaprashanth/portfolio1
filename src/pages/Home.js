import React from "react";
import "../components/App.css";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Person1 from "../assets/Person.jpg";
import Rightfa from "../assets/up-right.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="page">
      <h1 className="header">Prashanth Billa</h1>

      <p>
        Hey I am a Full Stack Web Developer
        <strong>Experience on React very strong</strong>to build a faster web
        projects.
      </p>
      <div className="flex">
        <img src={Person1} alt="No" />
        <div className="wraper">
          <span>
            <FaTwitter className="fa-img" /> 1 post
          </span>
          <span>
            <FaGithub className="fa-img" /> 15+ repo
          </span>
          <span>
            <FaLinkedin className="fa-img" /> 1 post
          </span>
        </div>
      </div>
      <p>
        Over the past decade, I've written content on my blog and newsletter. I
        try to keep things simple. You'll find writing about technologies I'm
        interested in at the time, or how I'm learning and growing in my career.
      </p>
      <div className="flex-end">
        <div>
          <img src={Rightfa} className="right-fa" alt="No" />
          <Link
            className="a__link"
            to="https://twitter.com/?lang=en"
            target="_blank"
          >
            follow me on twitter
          </Link>
        </div>
        <div>
          <img src={Rightfa} className="right-fa" alt="No" />
          <Link
            className="a__link"
            to="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"
            target="_blank"
          >
            follow me on LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
