import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const jubileeDate = new Date('2025-01-01').getTime();
      const now = new Date().getTime();
      const difference = jubileeDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-8 text-white">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.days}</div>
        <div className="text-sm md:text-base">Days</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm md:text-base">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm md:text-base">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm md:text-base">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;