// import {ReactComponent as HomeLogo} from '../assets/images/home.svg';
// import {ReactComponent as icons} from '../assets/images/menu/';

const MenuItem = ({link, text, LogoName}) => {
// const logo = require(svgUrl)
  // const SvgLogo = icons[logoName];
  return (
    <li className='menu-item'>
      <a className='menu-link' href={link}>
        {/* <SettingsLogo className='menu-icon'/> */}
          <LogoName className='menu-icon'/>
        <span className='menu-text'>{text}</span>
      </a>
    </li>
  );
}

export default MenuItem;
