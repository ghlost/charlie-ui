import { useEffect, useState } from 'react';
import {ReactComponent as SearchLogo} from '../assets/images/search.svg';
import TransactionsItem from './TransactionsItem';
import '../assets/css/Transactions.css';

/**
 * Transactions - display component for a series of transactions
 * @param {object} props
 * @param {array} props.set - list of a number of transactions to display
 * @returns 
 */
const Transactions = ({set}) => {
  const [groups, setGroups] = useState();

  // used to map the numbers to the months
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Dececember'
  ];

  /**
   * 
   * @param {number} unix - number of seconds since epoch
   * @returns {string} - a relative date string to compare for specific days
   */
  const getDateString = (unix) => {
    const displayDate = new Date(unix * 1000);

    return displayDate.toDateString();
  }

  /**
   * getSubheadDate - calculate and return a string that will display
   *  date or relative strings for when the event occured
   * @param {number} unix - number of seconds since epoch
   * @returns {string} - a word or string to denote the day the actions happened
   */
  const getSubheadDate = (unix) => {
    let displayDate;
    const oneDayMilli = 86400000;
    const itemMilli = unix * 1000
    const itemDateObj = new Date(itemMilli);
    const itemDate = itemDateObj.getDate();
    const now = Date.now();
    const nowDateObj = new Date(now);
    const nowDate = nowDateObj.getDate();

    // if the difference between the milliseconds of now and the item
    // is fewer than twice the milliseconds in a day then it happened
    // today or yesterday
    if(now - itemMilli < oneDayMilli * 2) {
      if(nowDate - itemDate === 0) {
        displayDate = 'Today';
      } else {
        displayDate = 'Yesterday';
      }
    } else {
      displayDate = `${months[itemDateObj.getMonth()]} ${itemDate}`;
    }

    return displayDate
  }

  useEffect(() => {
    // copy the array and sort it by most recent entry
    // data is already sorted but just in case
    let sortedSet = [...set].sort((a, b) => b.unix - a.unix);
    let groupedByDate = {};

    // groups an array into an object based on a function,
    // in this case our getDateString()
    // Object.groupBy() actually does not work on Mac OSX
    if(typeof Object.groupBy !== 'undefined') {
      groupedByDate = Object.groupBy(sortedSet, ({unix}) => getDateString(unix));
    } else {
      sortedSet.forEach(item => {
        const currentDate = getDateString(item.unix)
        if(groupedByDate.hasOwnProperty(currentDate)) {
          groupedByDate[currentDate].push(item);
        } else {
          groupedByDate[currentDate] = [item];
        }
      });
    }

    setGroups({...groupedByDate});
  }, [set])

  return (
    <section className='transactions' aria-labelledby='transactions-id'>
      <header className='transactions-header'>
        <h2 className='transactions-headline' id='transactions-id'>Transactions</h2>
        <button className='transaction-button'>
          <SearchLogo className='transaction-search' />
        </button>
      </header>
      <div className='transactions-group'>
        {/* Groups is an object. If you grab the keys, each key is a date and the value is an array of transactions associate with it. Loop through each key, and for each key display a headline and loop through the array for each transaction. */}
        {!!groups && Object.keys(groups).map((group, index) => {
          return (
            <ul className='transactions-set' key={index} role='menu' aria-labelledby={`transaction-set-${index}`}>
              <li className='transaction-item' role='presentation'><h3 id={`transactions-set-${index}`} className='transaction-subhead' role='menuitem'>{getSubheadDate(groups[group][0].unix)}</h3></li>
              { groups[group].map(item => {
                return <TransactionsItem {...item} key={item.unix} />
              }) }
            </ul>
          )
        })}
      </div>
    </section>
  );
}

export default Transactions;
