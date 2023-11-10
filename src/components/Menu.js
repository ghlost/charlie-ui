import '../assets/css/Menu.css';
import {ReactComponent as HomeLogo} from '../assets/images/menu/home.svg';
import {ReactComponent as ExchangeLogo} from '../assets/images/menu/exchange-rate.svg';
import {ReactComponent as MapLogo} from '../assets/images/menu/pin.svg';
import {ReactComponent as SettingsLogo} from '../assets/images/menu/settings.svg';
import MenuItem from './MenuItem';

const Menu = () => {
  const menuSet = [
    {
      link: '/',
      text: 'Home',
      LogoName: HomeLogo
    },
    {
      link: '/?exchange',
      text: 'Exchange',
      LogoName: ExchangeLogo
    },
    {
      link: '/?map',
      text: 'Map',
      LogoName: MapLogo
    },
    {
      link: '/?settings',
      text: 'Settings',
      LogoName: SettingsLogo
    }
  ]

  return (
    <nav className='menu'>
      <ul className='menu-set' role='menu'>
        {menuSet && menuSet.map((item) => {
          return (
            <MenuItem {...item} key={item.text} />
          )
        })}
      </ul>
    </nav>
  );
}

export default Menu;
