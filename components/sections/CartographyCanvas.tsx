'use client';

import {useRef, useEffect} from 'react';
import {createCartography} from 'cartography';
import 'cartography/style.css';

export function CartographyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cartography = createCartography({container: containerRef.current});

    return () => {
      cartography.destroy();
    };
  }, []);

  return <div ref={containerRef} className="cartography" style={{height: '60vh'}} />;
}
