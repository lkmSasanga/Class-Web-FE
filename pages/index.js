import Navigation from "../components/Navigation/Navigation";
import classes from "./index.module.css";
import Image from "next/image";
import HeroMainImage from "../assets/Hero/HeroMainImage.png";
import HeroHead from "../assets/Hero/HeroHead.png";
import LandingAboutUs from "../assets/Hero/LandingAboutUs.png";
import imageOne from "../assets/Hero/imageOne.png";
import imageTwo from "../assets/Hero/imageTwo.png";
import imageThree from "../assets/Hero/imageThree.png";
import imageFour from "../assets/Hero/imageFour.png";
import imageFive from "../assets/Hero/imageFive.png";




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
    /*----------------------------------Navigation Bar----------------------------------------------------------*/
    <div>
      <div className={classes.navContainer}>
        <span>
          <Image src={HeroHead} alt="hero" />
        </span>
        <Navigation />
      </div>

      {/*----------------------------First Container Create-------------------------------------------------- */}

      <div className={classes.mainContainer}>
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
          <div className={classes.secondLeftContainer}>
            <span>
              <Image src={LandingAboutUs} alt="LandingAboutUs" />
            </span>
          </div>
        </div>

        <div className={classes.firstRightContainer}>
          <span>
            <Image src={HeroMainImage} alt="HeroMainImage" />
          </span>

          {/*-------------------------------------- second two container create---------------------------- */}

          <div className={classes.secondRightContainer}>
            <p className={classes.p4}>WELCOME TO tuition</p>
            <p className={classes.p5}>SRI LANKA #1 MOKAKHARI PLATFORM</p>
            <p className={classes.p6}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore. et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
              sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore.
            </p>
            <button className={classes.buttonAboutUs}>About Us</button>
          </div>
        </div>
      </div>
      <div className={classes.thirdContainer}>
        <p className={classes.p4}>WHY tuition</p>
        <p className={classes.p5}>SRI LANKA #1 MOKAKHARI PLATFORM</p>
        <p className={classes.p6}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>

      <div className={classes.pictureContainer}>
        <div className={classes.imageOne}>
          <span>
            <Image src={imageOne} alt="imageOne" />
          </span>
        </div>
        
        <div className={classes.imageTwo}>
          <span>
            <Image src={imageTwo} alt="imageTwo" />
          </span>
        </div>

        <div className={classes.imageThree}>
          <span>
            <Image src={imageThree} alt="imageThree" />
          </span>
        </div>

        <div className={classes.imageFour}>
          <span>
            <Image src={imageFour} alt="imageFour" />
          </span>
        </div>
        <div className={classes.imageFive}>
          <span>
            <Image src={imageFive} alt="imageFive" />
          </span>
        </div>
        </div>
        
    </div>
  );
}
