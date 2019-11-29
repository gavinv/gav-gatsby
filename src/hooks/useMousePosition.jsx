import { useState, useCallback } from 'react'
import { useEventListener } from './useEventListener'

export default function useMousePosition() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener('mousemove', handler);

  return coords;
}