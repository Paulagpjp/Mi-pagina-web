export type Tone = "magenta" | "violet" | "lime" | "amber" | "cyan";

export const toneSolid: Record<Tone, string> = {
  magenta: "bg-magenta text-white",
  violet: "bg-violet text-white",
  lime: "bg-lime text-ink",
  amber: "bg-amber text-ink",
  cyan: "bg-cyan text-ink",
};

export const toneText: Record<Tone, string> = {
  magenta: "text-magenta",
  violet: "text-violet",
  lime: "text-lime",
  amber: "text-amber",
  cyan: "text-cyan",
};

export const toneRing: Record<Tone, string> = {
  magenta: "hover:shadow-[10px_10px_0_0_#E2005A]",
  violet: "hover:shadow-[10px_10px_0_0_#6C2BD9]",
  lime: "hover:shadow-[10px_10px_0_0_#C6FF4F]",
  amber: "hover:shadow-[10px_10px_0_0_#FFC93C]",
  cyan: "hover:shadow-[10px_10px_0_0_#22D3EE]",
};
