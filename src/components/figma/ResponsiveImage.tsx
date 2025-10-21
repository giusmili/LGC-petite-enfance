import React, { useState } from 'react'

type Props = {
  baseName: string // basename in /public/assets without -w{n} or extension
  alt: string
  className?: string
  style?: React.CSSProperties
  sizes?: string // sizes attribute for srcset selection
}

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ResponsiveImage({ baseName, alt, className, style, sizes = '100vw' }: Props) {
  const [didError, setDidError] = useState(false)
  const widths = [480, 768, 1024, 1440]

  const make = (ext: string) =>
    widths.map((w) => `/assets/${baseName}-w${w}.${ext} ${w}w`).join(', ')

  if (didError) {
    return (
      <img src={ERROR_IMG_SRC} alt={alt} className={className} style={style} />
    )
  }

  return (
    <picture>
      <source type="image/avif" srcSet={make('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={make('webp')} sizes={sizes} />
      <img
        src={`/assets/${baseName}-w1024.jpg`}
        srcSet={make('jpg')}
        sizes={sizes}
        alt={alt}
        className={className}
        style={style}
        onError={() => setDidError(true)}
      />
    </picture>
  )
}

