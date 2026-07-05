import { useTheme } from '@/providers/theme-providers'
import { Switch } from '../ui/switch'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Switch checked={false} disabled /> 
  }

  return (
    <Switch 
      checked={theme === 'dark'} 
      onCheckedChange={(e) => {
        if (e) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
      }} 
    />
  )
}