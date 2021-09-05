import Link from "next/link";
import Logo from "../../Logo/Logo";
import Image from "next/image";
import searchIcon from "../../../assets/Navigation/searchIcon.svg";
import secondNav from "../../../assets/Navigation/SecondNav.png";
import classes from "./SecondNavigation.module.css";

function Navigation() {
  return (
    <div className={classes.navContainer}>
      <span>
        <Image src={secondNav} alt="hero" />
      </span>
      <header className={classes.header}>
      
        <div className={classes.logo}>
          <span>
            <Logo />
          </span>
          <p>tuition</p>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.rightHeaderContainer}>
          <span>
            <Image src={searchIcon} alt="search icon" />
          </span>
          <button className={classes.button}>Login</button>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
