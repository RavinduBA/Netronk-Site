"use client";
import { motion, useTransform, animate, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { cn } from "../../lib/utils";

export default function CountAnimation({
  number,
  className,
}: {
  number: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, number, { duration: 2 });

    return animation.stop;
  }, []);

  return <motion.h1 className={cn(className)}>{rounded}</motion.h1>;
}
