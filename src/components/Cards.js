import '../assets/css/Cards.css';
import Card from './Card';

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
