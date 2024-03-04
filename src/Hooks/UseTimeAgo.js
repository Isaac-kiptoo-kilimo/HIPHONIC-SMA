// useTimeAgo.js
import { useEffect, useState } from 'react';

const useTimeAgo = (timestamp) => {
  const calculateTimeAgo = (timestamp) => {
    const currentTime = new Date();
    const createdAt = new Date(timestamp);
    const timeDifference = currentTime - createdAt;

    const minutes = Math.floor(timeDifference / (1000 * 60));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutes < 60) {
      return `${minutes} m${minutes === 1 ? '' : ''}`;
    } else if (hours < 24) {
      return `${hours} h${hours === 1 ? '' : ''}`;
    } else {
      return `${days} d${days === 1 ? '' : ''} `;
    }
  };

  const [timeAgo, setTimeAgo] = useState(calculateTimeAgo(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(timestamp));
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [timestamp]);

  return timeAgo;
};

export default useTimeAgo;
