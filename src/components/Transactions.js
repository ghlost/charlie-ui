import { useEffect, useState } from 'react';
import {ReactComponent as SearchLogo} from '../assets/images/search.svg';
import TransactionsItem from './TransactionsItem';
import '../assets/css/Transactions.css';

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
   * 
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
    // is fewer than twice the milliseconds in a day 
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
    let sortedSet = [...set];
    sortedSet.sort((a, b) => a.unix - b.unix);
    let groupedArray = []
    let current;
    let dateString;

    // loop through the set popping out the last in the area to construct
    // groupings of dates.
    while(sortedSet.length > 0) {
      const grouping = [];
      current = sortedSet.pop();
      // console.log('current', current);
      grouping.push(current);
      dateString = getDateString(current.unix);

      // go in reverse to pop out items without re-indexing
      for(let i = sortedSet.length - 1; i > 0; i--) {
        // since this is sorted already we know that if the next item is NOT
        // the same day then you can break the loop and go to the pop the next
        if (getDateString(sortedSet[i].unix) !== dateString) {
          break;
        } else {
          grouping.push(sortedSet.pop());
        }
      }

      groupedArray.push(grouping);
    }
    setGroups([...groupedArray]);

    return () => {
      setGroups([]);
    }
  }, [set]);

  return (
    <section className='transactions' aria-labelledby='transactions-id'>
      <header className='transactions-header'>
        <h2 className='transactions-headline' id='transactions-id'>Transactions</h2>
        <button className='transaction-button'>
          <SearchLogo className='transaction-search' />
        </button>
      </header>
      <div className='transactions-group'>
        {!!groups && groups.map((group, index) => {
          return (
            <ul className='transactions-set' key={index} role='menu' aria-labelledby={`transaction-set-${index}`}>
              <li className='transaction-item'><h3 id={`transactions-set-${index}`} className='transaction-subhead'>{getSubheadDate(group[0].unix)}</h3></li>
              { group.map(item => {
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
