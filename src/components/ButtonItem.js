// import {ReactComponent as HomeLogo} from '../assets/images/home.svg';
// import {ReactComponent as icons} from '../assets/images/menu/';
import '../assets/css/Buttons.css';

const ButtonItem = ({text, LogoName}) => {
  // const logo = require(svgUrl)
    // const SvgLogo = icons[logoName];
    return (
      <li className='button-item'>
        <button className='button-link' title={text}>
          <span className="button-button">
            <LogoName className='button-icon'/>
          </span>
          <span className='button-text'>{text}</span>
        </button>
      </li>
    );
  }
  
  export default ButtonItem;
  