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
    console.log("clicked on teacher");
  };

  const onClickStudent = (e) => {
    e.preventDefault();
    console.log("Clicked on student ");
  };

  return (
    <div>
      {/* <Navigation /> */}
      <BootstrapNavigation/>

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
          <button className={classes.buttonTeacher} onClick={onClickTeacher}>
            Teacher
          </button>
          <button className={classes.buttonStudent} onClick={onClickStudent}>
            Student
          </button>
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
