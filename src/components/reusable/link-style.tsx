import { cn } from '@/lib/utils'

export const linkStyle = (className?: string) => cn("underline-offset-4 underline text-blue-500 hover:text-blue-600 hover:underline-offset-5 transition-all", className);