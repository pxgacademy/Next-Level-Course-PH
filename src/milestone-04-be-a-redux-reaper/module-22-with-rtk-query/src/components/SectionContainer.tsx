import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className }: Props) => {
  return (
    <section className={twMerge("container px-4 mx-auto mt-6", className)}>
      {children}
    </section>
  );
};

export default SectionContainer;
