import '../assets/css/Buttons.css';

const ButtonItem = ({text, LogoName}) => {
    return (
      <li className='button-item' role="presentation">
        <button className='button-link' title={text} role='menuitem'>
          <span className='button-background'>
            <LogoName className='button-icon'/>
          </span>
          <span className='button-text'>{text}</span>
        </button>
      </li>
    );
  }
  
  export default ButtonItem;
  