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
