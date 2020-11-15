import { useEffect } from 'react'

export function useScroll(onScroll) {
  useEffect(() => {
    const handler = () => {
      const top = document.body.scrollTop || document.documentElement.scrollTop
      const left =
        document.body.scrollLeft || document.documentElement.scrollLeft

      onScroll(top, left)
    }

    handler()
    document.addEventListener('scroll', handler)

    return () => {
      document.removeEventListener('scroll', handler)
    }
  }, [onScroll])
}
