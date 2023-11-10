import { useEffect, useState } from 'react';
import {ReactComponent as SearchLogo} from '../assets/images/search.svg';
import TransactionsItem from './TransactionsItem';
import '../assets/css/Transactions.css';

const Transactions = ({set}) => {
  const [groups, setGroups] = useState();

  // used to map the numbers to the months
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
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

  const getSubheadDate = (unix) => {
    const displayDate = new Date(unix * 1000);
    const now = new Date();

    return displayDate.
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
  }, [set])

  return (
    <section className='transactions'>
      <header className='transactions-header'>
        <h2 className='transactions-headline'>Transactions</h2>
        <SearchLogo />
      </header>
      <div className='transactions-group'>
        {!!groups && groups.map((group, index) => {
          return (
            <ul className='transactions-set' key={index}>
              {/* Needs to be updated to eye friendly date OR 'Yesterday' */}
              <li className='transaction-item'><h3 className='transaction-subhead'>{getDateString(group[0].unix)}</h3></li>
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
