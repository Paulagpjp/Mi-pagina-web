export default function Marquee({
  words,
  className = "bg-ink text-cream",
  speed = "animate-marquee",
  starColor = "text-magenta",
}: {
  words: readonly string[];
  className?: string;
  speed?: string;
  starColor?: string;
}) {
  // Rendered twice so the -50% translate loops without a visible seam.
  const run = [...words, ...words];

  return (
    <div
      className={`overflow-hidden border-y-[3px] border-ink py-4 ${className}`}
      aria-hidden="true"
    >
      <div className={`marquee-track ${speed}`}>
        {run.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="display flex shrink-0 items-center gap-6 px-6 text-2xl sm:text-3xl"
          >
            {word}
            <span className={`text-lg ${starColor}`}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
