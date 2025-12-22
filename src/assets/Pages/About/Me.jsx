import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Me() {
  return (
    <div className="flex flex-col lg:flex-row  ">
      <div className=" lg:ml-4 lg:mr-2 lg:w-[30%] ">
        <img
          className="w-44 h-44 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
          src="/yogesh.jpg"
          alt="Yogesh Kumar"
        />
        <div className="text-white text-center lg:items-start lg:flex lg:flex-col">
          <div className="text-2xl mt-3">Connect with Me</div>
          <a href="https://www.linkedin.com/in/yogesh012/" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-1 items-center mt-1 cursor-pointer justify-center">
            <span className="text-lg"><FaLinkedin /></span>
            <span>Connect on LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/_yogesh__012/" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-1 items-center mt-1 cursor-pointer justify-center">
            <span className="text-lg"><FaInstagram /></span>
            <span>Follow on Instagram</span>
          </a>
          <a href="https://github.com/yogeshvema" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-1 items-center mt-1 cursor-pointer justify-center">
            <span className="text-lg"><FaGithub /></span>
            <span>Explore My Projects on GitHub</span>
          </a>
        </div>
      </div>
      <div className="lg:w-[70%] lg:ml-2 lg:mr-4">
        <h1 className="text-4xl font-semibold mt-4 lg:mt-0 text-[#B1B7AB]">
          Diving Deep into Code: Unveiling the World of
          <span className=" text-nowrap "> Yogesh</span>
        </h1>
        <div className="text-white mt-2">
          <p>
            I'm Yogesh, an enthusiastic undergrad at IIT Mandi diving
            headfirst into the realms of Computer Science and Engineering. As
            a full-stack web developer, I merge my love for technology with an
            extensive understanding of Machine Learning and Deep Learning.
            With a firm grip on Data Structures and Algorithms, I thrive on
            exploring and contributing to the world of open source.
          </p>
          <p className="mt-2">
            My journey is marked by achievements such as securing the 3rd rank
            in an intense ML/DL competition hosted on Kaggle, where we
            predicted stock prices with precision. Additionally, I've
            showcased my skills at INTER IIT Tech Meet 12.0, contributing to
            the frontend development of innovative solutions addressing
            complex problem statements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
