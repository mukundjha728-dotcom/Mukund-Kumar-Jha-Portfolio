import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge tailwind classes safely.
 * Useful for building reusable components with dynamic classes.
 * 
 * @param {...(string | undefined | null | false)} inputs - The classes to merge
 * @returns {string} - The safely merged tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
