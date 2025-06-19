import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// สร้างฟังก์ชันสำหรับการรวม class ของ Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
