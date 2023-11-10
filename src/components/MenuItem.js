// import {ReactComponent as HomeLogo} from '../assets/images/home.svg';
// import {ReactComponent as icons} from '../assets/images/menu/';

const MenuItem = ({link, text, LogoName}) => {
  return (
    <li className='menu-item'>
      <a className='menu-link' href={link}>
        <LogoName className='menu-icon'/>
        <span className='menu-text'>{text}</span>
      </a>
    </li>
  );
}

export default MenuItem;
