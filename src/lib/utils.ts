import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const removeSpecialChars = (key = '') => {
  return key?.toLowerCase()?.replace(/[^a-z0-9 _-]/g, '')?.replace(/\s+/g, '-')?.replace(/-+/g, '-');
}