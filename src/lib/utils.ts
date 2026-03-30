import { type ClassNameValue, twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes with conflict resolution.
 */
export function cn(...inputs: ClassNameValue[]) {
  return twMerge(...inputs);
}
