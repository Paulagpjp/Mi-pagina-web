export default function SectionHead({
  eyebrow,
  title,
  accent,
  lead,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lead?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <span
        className={`eyebrow ${invert ? "text-lime" : "text-magenta"}`}
      >
        <span className="h-[3px] w-8 bg-current" />
        {eyebrow}
      </span>

      <h2 className="display mt-4 text-[2.6rem] leading-[1.05] sm:text-[4rem] lg:text-[4.6rem]">
        {title}{" "}
        {accent && (
          <span className={invert ? "text-lime" : "text-magenta"}>{accent}</span>
        )}
      </h2>

      {lead && (
        <p
          className={`mt-5 text-lg font-medium leading-relaxed ${
            invert ? "text-cream/80" : "opacity-75"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
