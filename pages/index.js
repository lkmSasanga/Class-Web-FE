import Navigation from "../components/Navigation/Navigation";
import classes from "./index.module.css";
import Image from "next/image";
import HeroMainImage from "../assets/Hero/HeroMainImage.png";

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
    <div>
      <Navigation />

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
