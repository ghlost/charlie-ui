import { useEffect, useState} from 'react';
import Timecode from './Timecode';

/**
 * TransactionsItem - Individual transaction to display
 * @param {object} props
 * @param {string} props.amount - value of the transaction
 * @param {string} props.unix - time in seconds since epoch of event
 * @param {string} props.name - name of the transaction, person or place
 * @param {string} props.imageUrl - path to the image asset to identify transaction
 * @param {string} props.type - credit or debit value to change color
 * @returns 
 */
const TransactionsItem = ({amount, unix, name, imageUrl, type}) => {
  let [avatar, setAvatar] = useState(imageUrl);

  useEffect(() => {
    // TODO - abstract fetchData to a utility function
    /**
     * fetchData - async function to import assets without knowing what
     * they will be in advance
     */
    async function fetchData() {
      let importedAvatar = await import(`../${imageUrl}`);
      setAvatar(importedAvatar.default);
    }
    fetchData();

    return () => {
      setAvatar(null);
    }
  }, [imageUrl]);

  return (
    <li className='transaction-item' role='menuitem'>
      <img alt={name} src={ avatar }/>
      <div className='transaction-details'>
        <p className='transaction-name'>{name}</p>
        <p className='transaction-date'><Timecode unix={unix} /></p>
      </div>
      <p className={`transaction-amount transaction-amount-${type}`}>{amount}</p>
    </li>
  );
}

export default TransactionsItem;
