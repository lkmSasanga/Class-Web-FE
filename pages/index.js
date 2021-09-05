<<<<<<< HEAD
// import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Navigation from '../components/Navigation/Navigation'
import BootstrapNavigation from '../components/BootstrapNav/BootstrapNav'
import MobileNavigation from '../components/MobileNavigation/MobileNavigation'
import classes from "./index.module.css";
import Image from "next/image";
import HeroMainImage from "../assets/Hero/HeroMainImage.png";
import 'bootstrap/dist/css/bootstrap.css'

// import React, { useState, useEffect } from 'react';

export default function Home() {
  // const [isMobile, setIsMobile] = useState(false);

  const onClickTeacher = (e) => {
    e.preventDefault();
=======
import { useEffect, useState } from "react";
import Link from "next/link";
import MainNavigation from "../components/Navigation/MainNavigation/MainNavigation";
import classes from "./index.module.css";
import Image from "next/image";
import HeroMainImage from "../assets/Hero/HeroMainImage.png";
// import heroHead from "../assets/Hero/HeroHead.png";

export default function Home() {
  const [user, setUser] = useState("");

  const onClickTeacher = e => {
    setUser("TEACHER");
>>>>>>> 4a4fcd4c079be1aa03db622c78845605eb732c14
    console.log("clicked on teacher");
  };

  const onClickStudent = e => {
    setUser("STUDENT");
    console.log("Clicked on student ");
  };

  useEffect(() => {
    console.log("useEffect running...");
    if (user) console.log("user", user);
  });

  return (
    <div>
<<<<<<< HEAD
      {/* <Navigation /> */}
      <BootstrapNavigation/>
=======
      {/* <div className={classes.navContainer}>
        <span>
          <Image src={heroHead} alt="hero" />
        </span>
          <Navigation className={classes.navigation}/>
      </div> */}
      <MainNavigation/>

>>>>>>> 4a4fcd4c079be1aa03db622c78845605eb732c14

      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <p className={classes.p1}>LOREM IPSUM DOLOR SIT</p>
          <p className={classes.p2}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
          </p>
          <p className={classes.p3}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.
          </p>
          <Link href="/news-feed">
            <button className={classes.buttonTeacher} onClick={onClickTeacher}>
              Teacher
            </button>
          </Link>
          <Link href="/news-feed">
            <button className={classes.buttonStudent} onClick={onClickStudent}>
              Student
            </button>
          </Link>
        </div>

        <div className={classes.rightContainer}>
          <span>
            <Image src={HeroMainImage} alt="HeroMainImage" />
          </span>

          <span></span>
        </div>
      </div>
    </div>
  );
}
