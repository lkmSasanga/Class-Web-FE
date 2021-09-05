import Link from "next/link";
import Logo from "../Logo/Logo";
import classes from "./MobileNavigation.module.css";

function MobileNavigation() {
  return (
    <nav role="navigation">
      <div className={classes.menuToggle}>
        {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
        <input type="checkbox" />

        {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
        <span></span>
        <span></span>
        <span></span>
        {/*     
    <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
        <ul className={classes.menu}>
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Info</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="" target="_blank">
            <li>Show me more</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavigation;
