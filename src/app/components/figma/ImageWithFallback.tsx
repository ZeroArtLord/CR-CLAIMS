import React, { useState, useEffect, useRef } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  lazy?: boolean;
  priority?: boolean;
}

export function ImageWithFallback({ 
  lazy = true, 
  priority = false,
  ...props 
}: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(priority)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!lazy || priority) {
      setIsInView(true)
      return
    }

    const node = imgRef.current
    if (!node) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observerRef.current?.disconnect()
        }
      },
      {
        rootMargin: '200px', // Carga antes de que entre en viewport
        threshold: 0.01
      }
    )

    observerRef.current.observe(node)

    return () => {
      observerRef.current?.disconnect()
    }
  }, [lazy, priority])

  const handleError = () => {
    setDidError(true)
  }

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const { src, alt, style, className, ...rest } = props

  // Para imágenes críticas (hero), cargar inmediatamente
  const shouldLoad = priority || isInView

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img
      ref={imgRef}
      src={shouldLoad ? src : undefined}
      data-src={!shouldLoad ? src : undefined}
      alt={alt}
      className={`${className || ''} ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
      style={style}
      loading={lazy && !priority ? "lazy" : "eager"}
      decoding="async"
      {...rest}
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}
