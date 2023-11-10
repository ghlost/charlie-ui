import '../assets/css/Card.css';
import { useEffect, useState } from 'react';

/**
 * Card - visual 
 * @param {object} props
 * @param {string} props.text - action for button to display
 * @param {ReactComponent} props.LogoName - SVG masked as ReactComponent in order for inlining
 * @returns 
 */
const Card = ({amount, background, last, type}) => {
  let [icon, setIcon] = useState(background);

  useEffect(() => {
    /**
     * fetchData - async function to import assets without knowing what
     * they will be in advance
     */
    async function fetchData() {
      let importedIcon = await import(`../${background}`);
      setIcon(importedIcon.default);
    }
    fetchData();

    return () => {
      setIcon(null);
    }
  }, [background]);

  return (
    <div className='card'>
      <img alt={type} src={ icon } role='presentation'/>
      <span className='card-amount'>{amount}</span>
      <span className='card-digits'>•••• {last}</span>
    </div>
  );
}

export default Card;
