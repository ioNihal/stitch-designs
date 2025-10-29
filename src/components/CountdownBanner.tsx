import { useState, useEffect } from "react";

interface CountdownBannerProps {
  targetDate: string;
}

const CountdownBanner = ({ targetDate }: CountdownBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate);
    const now = new Date();

    if (target <= now) {
      setIsVisible(false);
      return;
    }

    const closedBanner = sessionStorage.getItem("bannerClosed");
    if (closedBanner === "true") {
      setIsVisible(false);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setIsVisible(false);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("bannerClosed", "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center p-3 text-sm font-medium relative">
      <span>
        Limited Time Launch Offer: <strong>100,000</strong> Validation Credits -{" "}
        <strong>Just $49</strong>
      </span>
      <a
        className="ml-4 inline-flex items-center gap-1 font-semibold bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-xs"
        href="#"
      >
        Get Started
        <span className="material-symbols-outlined text-base">arrow_forward</span>
      </a>
      <span className="hidden sm:inline-block mx-4 opacity-50">|</span>
      <span className="hidden sm:inline-block">
        Expiring in:{" "}
        <strong>
          {String(timeLeft.days).padStart(2, "0")}D :{" "}
          {String(timeLeft.hours).padStart(2, "0")}H :{" "}
          {String(timeLeft.minutes).padStart(2, "0")}M
        </strong>
      </span>
      <button
        onClick={handleClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-opacity"
      >
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
};

export default CountdownBanner;