import '../assets/css/Cards.css';
import Card from './Card';

/**
 * Cards - visual and text indicator of card status
 * @param {object} props
 * @param {array} props.set - list of cards to display
 * @returns 
 */
const Cards = ({set}) => {
  return (
    <div className='cards'>
      {set && set.map(item => {
        return <Card {...item} key={item.last} />
      })}
    </div>
  );
}

export default Cards;
