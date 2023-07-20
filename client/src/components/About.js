import React from "react";
import hellopic from "../images/hello.png";
import stephparis from "../images/stephparis.jpeg";
import about from "../images/about.jpeg";

export default function About() {
  return (
    <main id="about">
      <div class="about-image-container">
      <img src={hellopic} alt='hello' className="hellopic"/>
      <img src={stephparis} alt='stephparis' className="stephparis"/>
      </div>
      <img src={about} alt='about' className="about"/>
      <p>
      A self-taught Software Engineer, passionate about building dynamic and engaging web experiences. 
      My skills include HTML, CSS, JavaScript, and the ReactJS Framework.
      </p>
      <p>
      I am a quick learner and constantly expanding my knowledge to stay current with the latest trends and 
      technologies in web development. My attention to detail and problem-solving skills allow me to create 
      clean and efficient code that enhances the user experience. 
      </p>
      <p>
      With a strong focus on collaboration and 
      communication, I am always looking for new opportunities to work with others to create innovative 
      solutions.
      </p>
    </main>
  );
}