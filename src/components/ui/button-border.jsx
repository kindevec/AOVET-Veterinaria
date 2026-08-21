import React from 'react';
import { Button } from './button';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export function ButtonBorder({ children, className, ...props }) {
  return (
    <Button variant="outline" className={cn('relative overflow-hidden', className)} {...props}>
      <div
        className={cn(
          '-inset-px pointer-events-none absolute rounded-[inherit] border-2 border-transparent border-inset [mask-clip:padding-box,border-box]',
          '[mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]'
        )}
      >
        <motion.div
          className={cn(
            'absolute aspect-square bg-gradient-to-r from-transparent via-[var(--color-aovet-accent)] to-[var(--color-aovet-accent)]'
          )}
          animate={{
            offsetDistance: ['0%', '100%'],
          }}
          style={{
            width: 30,
            offsetPath: 'rect(0 auto auto 0 round 20px)',
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: 'linear',
          }}
        />
      </div>
      {children}
    </Button>
  );
}
