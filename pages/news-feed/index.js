import Navigation from "../../components/Navigation/Navigation";
import classes from "./index.module.css";
import Image from "next/image";
import HeroMainImage from "../../assets/Hero/HeroMainImage.png";


function Newsfeed() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className={classes.mainCard}>
        <div className={classes.topContainer}>
          <div className={classes.userImageContainer}>
              
          </div>
          <div className={classes.userDetailsContainer}>
            <p className={classes.userName}>username</p>
            <p>Lorem Ipsum</p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        
        </div>
        <div className={classes.postContainer}>
        <span>
            <Image src={HeroMainImage} alt="HeroMainImage" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
