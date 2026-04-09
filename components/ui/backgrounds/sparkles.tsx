import * as React from "react";

export type SparklesCoreProps = {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

/**
 * Lightweight fallback implementation.
 * Some templates expect `SparklesCore` from this path.
 */
export function SparklesCore({
  className,
  background,
}: SparklesCoreProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        background: background ?? "transparent",
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default SparklesCore;
