import React, { useState, useEffect } from "react";

const useCurrentDate = (interval: number) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, interval);
    return () => clearInterval(timer);
  }, [interval, setDate]);

  return date;
};

const Second: React.FC = () => {
  const date = useCurrentDate(1000);
  return <div>{date.toLocaleTimeString()}</div>;
};

export default Second;
