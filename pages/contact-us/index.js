import Navigation from "../../components/Navigation/Navigation";
import classes from "./index.module.css";
// import Image from "next/image";
// import contactUs from "../../assets/Contact/ContactUs.png";

function Contactus() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className={classes.mainContainer}>
        <div className={classes.LeftContainer}>
          {/* <span>
            <Image src={contactUs} alt="ContactUs" />
          </span> */}
        </div>

        <div className={classes.rightContainer}>
          <p className={classes.p1}>WE ARE tuition</p>
          <p className={classes.p2}>SRI LANKA #1 MOKAKHARI PLATFORM</p>
          <p className={classes.p3}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam e.
          </p>
        

          <div>
            <input className={classes.messeage}/>
            
          </div>

          <button className={classes.buttonSend}> send</button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
