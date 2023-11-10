import '../assets/css/Card.css';
import { useEffect, useState } from 'react';
// import logo from '../assets/images/logo.svg';

const Card = ({amount, background, last, type}) => {
  let [icon, setIcon] = useState(background);

  useEffect(() => {
    /**
     * fetchData - async function to import assets without knowing what
     * they will be in advance
     */
    async function fetchData() {
      // You can await here
      let importedIcon = await import(`../assets/images/${background}`);
      setIcon(importedIcon.default);
    }
    fetchData();

    return () => {
      setIcon(null);
    }
  }, [background]);

  return (
    <div className='card'>
      <img alt={type} src={ icon }/>
      <span className='card-amount'>{amount}</span>
      <span className='card-digits'>•••• {last}</span>
    </div>
  );
}

export default Card;
