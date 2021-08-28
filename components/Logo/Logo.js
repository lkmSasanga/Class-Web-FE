import classes from './Logo.module.css';
import Image from 'next/image'
import logoImage from '.././../assets/logo.png'
function Logo() {

  return (
    <div className={classes.logo}>
    <span><Image src={logoImage} alt="logo" /></span>
    <p>tuition</p>
    </div>
  );
}

export default Logo;