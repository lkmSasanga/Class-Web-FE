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
      {/* <div className={classes.navContainer}>
        <span>
          <Image src={heroHead} alt="hero" />
        </span>
          <Navigation className={classes.navigation}/>
      </div> */}
      <MainNavigation />

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
