import { useEffect, useState} from 'react';
import Timecode from './Timecode';

const TransactionsItem = ({amount, unix, name, imageUrl, type}) => {
  let [avatar, setAvatar] = useState(imageUrl);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let importedAvatar = await import(`../${imageUrl}`);
      setAvatar(importedAvatar.default);
    }
    fetchData();

    return () => {
      setAvatar(null);
    }
  }, [imageUrl]);

  return (
    <li className='transaction-item'>
      <div className='transaction-details'>
        <img alt={type} src={ avatar }/>
        <p className='transaction-name'>{name}</p>
        <Timecode className='transaction-date' unix={unix} />
      </div>
      <p className={`transaction-amount transaction-amount-${type}`}>{amount}</p>
    </li>
  );
}

export default TransactionsItem;
