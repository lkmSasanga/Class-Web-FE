import Link from "next/link";
import Logo from "../Logo/Logo";
// import { FaSearch } from "react-icons/fa";
import Image from 'next/image'
import searchIcon from '../../assets/searchIcon.svg'
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo />
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
        <span><Image src={searchIcon} alt="search icon"/></span>
        <button className={classes.button}>Login</button>
      </div>
    </header>
  );
}

export default Navigation;
