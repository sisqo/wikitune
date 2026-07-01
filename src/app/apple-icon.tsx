import { ImageResponse } from 'next/og'
import { BrandIconTile } from '@/lib/brandIcon'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <BrandIconTile canvas={size.width} markRatio={0.58} />,
    { ...size }
  )
}
