/**
 * MenuItem - li of a menu action to display
 * @param {object} props
 * @param {string} props.link - url for the link
 * @param {string} props.text - Action text for link
 * @param {ReactComponent} props.LogoName - Svg masked as ReactComponent for inlining
 * @returns 
 */
const MenuItem = ({link, text, LogoName}) => {
  return (
    <li className='menu-item' role='presentation'>
      <a className='menu-link' href={link} role='menuitem'>
        <LogoName className='menu-icon'/>
        <span className='menu-text'>{text}</span>
      </a>
    </li>
  );
}

export default MenuItem;
