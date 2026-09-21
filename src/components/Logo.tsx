import Image from "next/image";
import { company } from "@/data/content";

type LogoProps = {
  className?: string;
  height?: number;
  priority?: boolean;
};

export default function Logo({
  className = "",
  height = 56,
  priority = false,
}: LogoProps) {
  const width = Math.round(height * 2.2);

  return (
    <Image
      src="/logo.png"
      alt={company.name}
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`}
      style={{ height, width: "auto", maxHeight: height }}
    />
  );
}
