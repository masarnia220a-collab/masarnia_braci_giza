import Link from "next/link";
import React from "react";
interface ButtonProps {
  label: string;
  href: string;
  style: "full" | "outline";
  classNames?: string;
}
export const Button = ({ label, href, style, classNames }: ButtonProps) => {
  const styles =
    style === "full"
      ? "text-white bg-brand-red"
      : "text-brand-red border-1 border-brand-red";

  return (
    <Link
      className={`pt-1.5 pb-1.5 pl-5 pr-5 rounded-xl  z-[99999] paragraph-sm paragraph-md  border- ${styles} ${
        classNames && classNames
      }`}
      href={href}
    >
      {label}
    </Link>
  );
};
