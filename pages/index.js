import Navigation from "../components/Navigation/Navigation";
import classes from "./index.module.css";
import Image from "next/image";
import HeroMainImage from "../assets/Hero/HeroMainImage.png";
import HeroHead from "../assets/Hero/HeroHead.png";
import LandingAboutUs from "../assets/Hero/LandingAboutUs.png";

export default function Home() {
  const onClickTeacher = (e) => {
    e.preventDefault();
    console.log("clicked on teacher");
  };

  const onClickStudent = (e) => {
    e.preventDefault();
    console.log("Clicked on student ");
  };

  return (

    /*------------------------------Navigation Bar----------------------------------------------------------*/
    <div>
      <div className={classes.navContainer}>
        <span>
          <Image src={HeroHead} alt="hero" />
        </span>
        <Navigation />
      </div>

     {/*----------------------------First Container Create-------------------------------------------------- */ }

      <div className={classes.firstMainContainer}>
        <div className={classes.firstLeftContainer}>
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

        <div className={classes.firstRightContainer}>
          <span>
            <Image src={HeroMainImage} alt="HeroMainImage" />
          </span>
        </div>
      </div>

{/*----------------------------Second Container Create-------------------------------------------------- */ }

      <div className={classes.secondtMainContainer}>
        <div className={classes.secondLeftContainer}>
          <span>
            <Image src={LandingAboutUs} alt="LandingAboutUs" />
          </span>

        </div>
      
        <div className={classes.firstRightContainer}>
          

         
        </div>
      </div>


    </div>
  );
}
