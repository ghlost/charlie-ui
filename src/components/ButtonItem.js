import '../assets/css/Buttons.css';

/**
 * ButtonItem - li of a button that displays some text and a logo
 * @param {object} props
 * @param {string} props.text - action for button to display
 * @param {ReactComponent} props.LogoName - SVG masked as ReactComponent in order for inlining
 * @returns 
 */
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
  