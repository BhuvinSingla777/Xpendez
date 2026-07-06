import { ButtonHTMLAttributes, ReactNode } from "react";

interface MintButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function MintButton({
  children,
  className = "",
  ...props
}: MintButtonProps) {
  return (
    <button
      className={`bg-pareto-mint text-pareto-text font-mono font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
