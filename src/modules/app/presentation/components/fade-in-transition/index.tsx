import { ElementType, useEffect, useRef, useState } from "react";

import useVisibleOnViewportStyles from "./styles.module.scss";

export function FadeInTransition({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const visibilityStyle = isVisible
    ? `${useVisibleOnViewportStyles.visibleOnViewport}`
    : ``;

  return (
    <div
      ref={elementRef}
      className={`${useVisibleOnViewportStyles.invisibleOnViewport} ${visibilityStyle}`}
    >
      {children}
    </div>
  );
}
