"use client";

import * as React from "react";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Minimal, build-safe 3D card effect primitives.
 * Many UI kits export these names; this file ensures they exist.
 */
export function CardContainer({ children, className }: BaseProps) {
  return <div className={className}>{children}</div>;
}

export function CardBody({ children, className }: BaseProps) {
  return <div className={className}>{children}</div>;
}

export type CardItemProps = BaseProps & {
  translateZ?: number | string;
  as?: keyof JSX.IntrinsicElements;
};

export function CardItem({
  children,
  className,
  as,
}: CardItemProps) {
  const Comp: any = as ?? "div";
  return <Comp className={className}>{children}</Comp>;
}

export default CardContainer;
