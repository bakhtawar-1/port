import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bakhtawar</h1>
        <p className={styles.description}>
        I am a Front-End Web Developer and Software Engineer skilled in building responsive web applications using HTML, CSS, JavaScript, and React. With experience in cloud computing (AWS) and various programming languages, I focus on creating efficient and user-friendly digital solutions.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://www.dropbox.com/scl/fi/r9wykvhtmh4rpq3o6lyd7/photo.jpeg?rlkey=0x9cb0xvpcc71v09qopjxhr9k&st=p3saacf1&raw=1"
  
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
