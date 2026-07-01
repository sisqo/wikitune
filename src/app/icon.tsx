import { ImageResponse } from 'next/og'
import { BrandIconTile } from '@/lib/brandIcon'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <BrandIconTile canvas={size.width} markRatio={0.62} withFacet={false} />,
    { ...size }
  )
}
