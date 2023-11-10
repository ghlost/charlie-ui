import { useEffect, useState } from 'react';
import {ReactComponent as SearchLogo} from '../assets/images/search.svg';
import TransactionsItem from './TransactionsItem';
import '../assets/css/Transactions.css';

const Transactions = ({set}) => {
  const [groups, setGroups] = useState();

  // const filterByDate = (arr, unix) => {

  //   let filteredSet = arr.filter(item => {
  //     return getDateString(item.unix) === getDateString(unix) ? item : false;
  //   });

  //   return filteredSet;
  // }

  const getDateString = (unix) => {
    const displayDate = new Date(unix * 1000);

    return displayDate.toDateString();
  }

  useEffect(() => {
    set.sort((a, b) => a.unix - b.unix);
    let filteredSet = [...set];
    let temp = []
    let current;
    let dateString;

    while(filteredSet.length > 0) {
      const arr = [];
      current = filteredSet.pop();
      console.log('current', current);
      arr.push(current);
      dateString = getDateString(current.unix);

      for(let i = filteredSet.length - 1; i > 0; i--) {
        console.log(getDateString(filteredSet[i].unix))
        if (getDateString(filteredSet[i].unix) !== dateString) {
          break;
        } else {
          arr.push(filteredSet.pop());
        }
      }

      temp.push(arr);
    }
    console.log(temp);

    // temp.push(...filterByDate(set, set[0].unix));

    setGroups([...temp]);

    return () => {
      setGroups([]);
    }
  }, [set])

  return (
    <section className="transactions">
      <header className='transactions-header'>
        <h2 className="transactions-headline">Transactions</h2>
        <SearchLogo />
      </header>
      <div className="transactions-group">
        <ul className="transactions-set">
          {!!groups && groups.map((group, index) => {
            return (
              <div className="test" key={index}>
                <h3>Heading: {index}</h3>
                { group.map(item => {
                  return <TransactionsItem {...item} key={item.unix} />
                }) }
              </div>
            )
          })}
        </ul>
      </div>
    </section>
  );
}

export default Transactions;
