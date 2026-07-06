import { ButtonHTMLAttributes, ReactNode } from "react";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function OutlineButton({
  children,
  className = "",
  ...props
}: OutlineButtonProps) {
  return (
    <button
      className={`border border-pareto-text text-pareto-text font-mono font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-pareto-text hover:text-pareto-bg transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
