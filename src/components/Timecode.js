import { useEffect, useState } from 'react';

/**
 * Timecode - component to display a specific timecode format
 * @param {object} props
 * @param {number} props.unix - seconds for the timecode
 * @returns 
 */
const Timecode = ({unix}) => {
  const [date, setDate] = useState(new Date(unix * 1000));

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

  useEffect(() => {
    setDate(new Date(unix * 1000));

    return() => {
      setDate(null);
    }
  }, [unix]);

  return (
    <>
      {/* output Jul 3, 2022 13:23 as a string */}
      {date && `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`}
    </>
  )
}

export default Timecode;