import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 5;
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            setLoaded(true);
            setTimeout(() => setHidden(true), 1500);
          }, 400);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(intervalRef.current);
  }, []);

  if (hidden) return null;

  return (
    <div id="loader" className={loaded ? "loaded" : ""}>
      <div className="shutter shutter-top" />
      <div className="shutter shutter-bottom" />

      <div className="loader-content">
        <p className="text-gray-500 tracking-[0.5em] uppercase text-xs mb-4">
          Initializing
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Ashik<span className="text-primaryRed">Artistry.</span>
        </h1>
        <div className="w-64 h-[2px] bg-white/10 mt-8 overflow-hidden rounded-full mx-auto">
          <div
            id="loader-bar"
            className="h-full bg-primaryRed"
            style={{ width: `${count}%` }}
          />
        </div>
        <p className="text-gray-500 text-xs mt-4 tracking-[0.3em]">
          <span>{count}</span>%
        </p>
      </div>
    </div>
  );
}
