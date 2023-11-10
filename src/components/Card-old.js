import { useEffect, useState } from 'react';
// import logo from '../assets/images/logo.svg';

const Card = ({amount, background, last, type}) => {
  console.log(background);
  let [icon, setIcon] = useState(background);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      let importedIcon = await import(`${background}`);
      setIcon(importedIcon.default);
    }
    fetchData();

    return () => {
      setIcon(null);
    }
  }, [background]);

  return <img alt='' src={ icon }/>;
}

export default Card;
