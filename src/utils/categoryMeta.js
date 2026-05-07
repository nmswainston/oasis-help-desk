import { Camera, Lightbulb, Music, Radio, Router, Tv } from 'lucide-react'

const categoryIconMap = {
  'TV & Video': Tv,
  'Audio & Music': Music,
  Remotes: Radio,
  'WiFi & Network': Router,
  Cameras: Camera,
  'Lighting & Shades': Lightbulb,
}

export function getCategoryIcon(category) {
  return categoryIconMap[category] ?? Lightbulb
}
