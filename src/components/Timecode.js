import { useEffect, useState } from 'react';

const Timecode = ({unix}) => {
  const [date, setDate] = useState(new Date(unix * 1000));

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

  useEffect(() => {
    setDate(new Date(unix * 1000));

    return() => {
      setDate(null);
    }
  }, [unix]);

  return (
    <>
      {date && `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}
    </>
  )
}

export default Timecode;