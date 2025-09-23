"use client";

import Link from "next/link";
import { forwardRef } from "react";

function cn(...a) {
  return a.filter(Boolean).join(" ");
}

const variants = {
  primary: "bg-white text-black hover:opacity-90",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white/90 hover:bg-white/5",
  subtle:
    "bg-white/[0.06] text-white/90 hover:bg-white/[0.1] border border-white/10",
};

const sizes = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-60 disabled:pointer-events-none";

const Button = forwardRef(function Button(
  {
    href,
    children,
    variant = "primary",
    size = "md",
    full = false,
    className = "",
    ...props
  },
  ref
) {
  const cls = cn(
    base,
    variants[variant],
    sizes[size],
    full && "w-full",
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button;
