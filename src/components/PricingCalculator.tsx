import { useState, useMemo } from "react";

const PricingCalculator = () => {
  const [volume, setVolume] = useState(10000);

  const price = useMemo(() => {
    if (volume <= 1000) return 2.0;
    if (volume <= 5000) return 9.0;
    if (volume <= 10000) return 18.0;
    if (volume <= 50000) return 75.0;
    if (volume <= 100000) return 120.0;
    if (volume <= 500000) return 450.0;
    if (volume <= 1000000) return 700.0;
    if (volume <= 5000000) return 2500.0;
    return 4000.0;
  }, [volume]);

  const pricePerThousand = useMemo(() => {
    return ((price / volume) * 1000).toFixed(2);
  }, [price, volume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div
      id="pricing"
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-display text-slate-900 dark:text-white mb-4 tracking-tighter">
            Simple, Honest Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Pick your volume. See your price instantly. No hidden fees - ever.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
            <label
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              htmlFor="email-volume"
            >
              Email Volume
            </label>
            <div className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {new Intl.NumberFormat().format(volume)}
            </div>
            <input
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              id="email-volume"
              max="10000000"
              min="1000"
              step="1000"
              type="range"
              value={volume}
              onChange={handleVolumeChange}
            />
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
              <span>1K</span>
              <span>100K</span>
              <span>1M</span>
              <span>10M</span>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-primary/10">
            <div className="flex items-center gap-2 mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  checked
                  className="sr-only"
                  name="payment-type"
                  type="radio"
                  value="one-time"
                />
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full uppercase ring-2 ring-primary">
                  One-time Purchase
                </span>
              </label>
            </div>
            <p className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
              {new Intl.NumberFormat().format(volume)} verification credits that
              never expire.
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 p-6 rounded-lg my-4 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pay once, Use Forever
              </p>
              <p className="text-5xl font-bold text-slate-900 dark:text-white my-1">
                ${price.toFixed(2)}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                ${pricePerThousand} per 1,000 emails
              </p>
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-white mb-3">
              ✨ What's Included
            </p>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_box
                </span>{" "}
                Bulk & Real-Time Verification
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_box
                </span>{" "}
                API Access
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_box
                </span>{" "}
                CSV List Cleaning
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_box
                </span>{" "}
                Disposable Email Detection
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_box
                </span>{" "}
                Role-based Filtering
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">
                  check_box
                </span>{" "}
                No Expiration
              </li>
            </ul>
            <a
              className="mt-6 bg-primary w-full text-center text-white px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              href="#"
            >
              Buy Credits
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;