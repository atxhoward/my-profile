import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-[1.25rem] border border-zinc-300 bg-bg p-6 shadow-sm backdrop-blur-md sm:p-7 ${className}`}
    >
      {children}
    </section>
  );
}