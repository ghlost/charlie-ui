import '../assets/css/Buttons.css';
import {ReactComponent as SendLogo} from '../assets/images/buttons/send-money.svg';
import {ReactComponent as ReceiveLogo} from '../assets/images/buttons/money-withdrawal.svg';
import {ReactComponent as UtilitiesLogo} from '../assets/images/buttons/bank.svg';
import {ReactComponent as StatsLogo} from '../assets/images/buttons/pie-chart.svg';
import ButtonItem from './ButtonItem';

const Buttons = () => {
  const buttonSet = [
    {
      text: 'Send',
      LogoName: SendLogo
    },
    {
      text: 'Receive',
      LogoName: ReceiveLogo
    },
    {
      text: 'Utilities',
      LogoName: UtilitiesLogo
    },
    {
      text: 'Stats',
      LogoName: StatsLogo
    }
  ]
  return (
    <ul className='buttons-set' role='menu'>
      {buttonSet && buttonSet.map((item) => {
        return (
          <ButtonItem {...item} key={item.text} />
        )
      })}
    </ul>
  );
}

export default Buttons;
