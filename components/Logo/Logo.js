import classes from './Logo.module.css';
import Image from 'next/image'
import logoImage from '.././../assets/Navigation/logo.png'
function Logo() {

  return (
    <div className={classes.logoContainer}>
    <span><Image src={logoImage} alt="logo" /></span>
    {/* <p>tuition</p> */}
    </div>
  );
}

export default Logo;