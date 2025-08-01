'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, motion, useMotionTemplate } from 'motion/react';
import React from 'react';

export const HeroHighlight = ({
  children,
  className,
  containerClassName
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  // SVG patterns for squares instead of dots
  const gridPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20' fill='none'%3E%3Cpath d='M20 0L20 20M0 0L0 20' stroke='%23e5e5e5' stroke-width='1'/%3E%3Cpath d='M0 20L20 20M0 0L20 0' stroke='%23e5e5e5' stroke-width='1'/%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20' fill='none'%3E%3Cpath d='M20 0L20 20M0 0L0 20' stroke='%23FFB49D' stroke-width='1'/%3E%3Cpath d='M0 20L20 20M0 0L20 0' stroke='%23FFB49D' stroke-width='1'/%3E%3C/svg%3E")`
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20' fill='none'%3E%3Cpath d='M20 0L20 20M0 0L0 20' stroke='%23262626' stroke-width='1'/%3E%3Cpath d='M0 20L20 20M0 0L20 0' stroke='%23262626' stroke-width='1'/%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='20' height='20' fill='none'%3E%3Cpath d='M20 0L20 20M0 0L0 20' stroke='%23FFB49D' stroke-width='1'/%3E%3Cpath d='M0 20L20 20M0 0L20 0' stroke='%23FFB49D' stroke-width='1'/%3E%3C/svg%3E")`
    }
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn('bg-white dark:bg-black', containerClassName)}
      onMouseMove={handleMouseMove}
    >
      <div
        className='pointer-events-none absolute inset-0 dark:hidden'
        style={{
          backgroundImage: gridPatterns.light.default
        }}
      />
      <div
        className='pointer-events-none absolute inset-0 hidden dark:block'
        style={{
          backgroundImage: gridPatterns.dark.default
        }}
      />
      <motion.div
        className='pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden'
        style={{
          backgroundImage: gridPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `
        }}
      />
      <motion.div
        className='pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block'
        style={{
          backgroundImage: gridPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `
        }}
      />

      <div className={cn('relative z-20', className)}>{children}</div>
    </div>
  );
};
