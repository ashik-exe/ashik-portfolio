export default function ShinyButton({ text, onClick }) {
  return (
    <button
  onClick={onClick}
  className="
    group
    relative
    overflow-hidden
    rounded-2xl
    bg-primaryRed
    px-10
    py-5
    font-black
    uppercase
    tracking-wider
    text-white
    transition-all
    duration-300
    hover:scale-105
    hover:-translate-y-1
    active:scale-95
    shadow-[0_0_15px_rgba(255,0,0,0.25)]
    hover:shadow-[0_0_50px_rgba(255,0,0,0.45)]
  "
>
  <span className="relative z-10 flex items-center gap-3">
    LET'S WORK
    <span className="transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </span>

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-red-700
      via-red-500
      to-red-700
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-300
    "
  />
</button>
  );
}