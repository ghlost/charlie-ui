import '../assets/css/Card.css';
import { useEffect, useState } from 'react';

/**
 * Card - visual and text indicator of card status
 * @param {object} props
 * @param {string} props.amount - money on the card or in the account
 * @param {string} props.background - background path to an image for the card
 * @param {string} props.last - last 4 digits for the card
 * @param {string} props.type - provide alt attribute a type to display
 * @returns 
 */
const Card = ({amount, imageUrl, last, type}) => {
  let [background, setBackground] = useState(imageUrl);

  useEffect(() => {
    /**
     * fetchData - async function to import assets without knowing what
     * they will be in advance
     */
    async function fetchData() {
      let importedBackground = await import(`../${imageUrl}`);
      setBackground(importedBackground.default);
    }
    fetchData();

    return () => {
      setBackground(null);
    }
  }, [imageUrl]);

  return (
    <div className='card'>
      <img alt={type} src={ background } role='presentation'/>
      <span className='card-amount'>{amount}</span>
      <span className='card-digits'>•••• {last}</span>
    </div>
  );
}

export default Card;
