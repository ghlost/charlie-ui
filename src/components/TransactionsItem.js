import { useEffect, useState} from 'react';
import Timecode from './Timecode';

const TransactionsItem = ({amount, unix, name, imageUrl, type}) => {
  let [avatar, setAvatar] = useState(imageUrl);

  useEffect(() => {
    // TODO - abstract fetchData to a utility function
    /**
     * fetchData - async function to import assets without knowing what
     * they will be in advance
     */
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
      <img alt={type} src={ avatar }/>
      <div className='transaction-details'>
        <p className='transaction-name'>{name}</p>
        <p className='transaction-date'><Timecode unix={unix} /></p>
      </div>
      <p className={`transaction-amount transaction-amount-${type}`}>{amount}</p>
    </li>
  );
}

export default TransactionsItem;
